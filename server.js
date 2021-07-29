//getting node packagers
require('dotenv').config();
const mysql = require('mysql2');
const inquirer = require('inquirer')
const Sequelize = require('sequelize');
const express = require('express');
const cTable = require('console.table');
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//------------------------------------------------------------------------------
//creating a connecting to sql database 

  // process.env.DB_NAME,
  // process.env.DB_USER,
  // process.env.DB_PASSWORD
  const PORT = process.env.PORT || 3005;
  const db = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: 'Luigi100!',
    database: 'business_db'
    },
    console.log(`Connected to the business_db database.`)
  );

//------------------------------------------------------------------------------

const initialQuestions = () =>{
  inquirer
   .prompt({
      type: 'list',
      name: 'addRole',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all Roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        "Quit"
      ],
    })
    .then(answer => {
      if (answer.addRole === 'View all departments') {
        viewDept();
      }

      else if (answer.addRole === 'View all Roles') {
        viewRoles();
      }

      else if (answer.addRole === 'View all employees') {
        viewEmps();
      }

      else if (answer.addRole === 'Add a department') {
        addDept();
      }

      else if (answer.addRole === 'Add a role') {
        addRole();
      }

      else if (answer.addRole === 'Add an employee') {
        addEmps();
      }

      else if (answer.addRole === 'Update an employee role') {
        updateEmps();
      }

      else {
        console.log('end');
        db.end();
        process.exit();
      }
    })
  }
  ;

//------------------------------------------------------------------------------

const viewDept = () => {
  console.log("Viewing Departments.");
  var query = 
  `
  SELECT * FROM departments;
  `
  db.query(query, function (err, res) {
    if (err) {
      console.log(err);
    }
    console.table(res);
    start();
  });
}


//------------------------------------------------------------------------------

const viewRoles = () => {
  console.log("Viewing all Roles.")
  var query = 
  `
  SELECT * FROM roles;
  `;
  db.query(query, function (err, res) {
    if (err) {
      console.log(err);
    }
    console.table(res);
    start();
  });
}

//------------------------------------------------------------------------------

const viewEmps = () => {
  console.log("Viewing all Employees.")
  var query = 
  `
  SELECT * FROM employees;
  `;
  db.query(query,function(err, res){
    if (err) {
      console.log(err);
    }
    console.table(res);
    start();
  });
}

//------------------------------------------------------------------------------

const addDept = () => {
  inquirer
  .prompt({
    name: "deptName",
    type:"input",
    message: "What is the name of the department that you would like to add?"
  })
  .then(response = () => {
    console.log("Adding Department.")
    var query = 
    `
    INSERT INTO department (dept_name) 
    VALUES (?)
    `;
    var deptName = [response.deptName]
  
    db.query(query, deptName, function(err, res){
    if (err) {
      console.log(err);
    }
    console.table(res);
    start();
    })
  })
}

//------------------------------------------------------------------------------

const addRole = () => {
    inquirer
    .prompt({
      name: "roleName",
      type:"input",
      message: "What is the name of the role you would like to add?",

      name: "roleSalary",
      type:"input",
      message: "What is the name of the role you would like to add?",

      name: "roleDept",
      type:"input",
      message: "What is the name of the role you would like to add?"
    })
    .then(response = () => {
      console.log("Adding Role.")
      `
      INSERT INTO roles (title, salary, department) 
      VALUES (?)
      `;
      var roleResponses = [response.tile, response.salary, response.department]
    
      db.query(query, roleResponses, function(err, res){
      if (err) {
        console.log(err);
      }
      console.table(res);
      start();
      })
    })
}

//------------------------------------------------------------------------------

const addEmps = () => {
  inquirer
  .prompt({
    name: "empFirstName",
    type:"input",
    message: "What is the employees first name?",

    name: "empLastName",
    type:"input",
    message: "What is the employees last name?",

    name: "empRole",
    type:"input",
    message: "What is the role of the employee?",
    
    name: "empManager",
    type:"list",
    message: "does the employee have a manager?",
    choice: ["yes", "no"]
  })
  .then(response = () => {
    if (response.empManager === "yes"){
      //select manager from list
    }
    else{
      response.empManager = null;
    }
  })
  .then(response = () => {
    console.log("Adding Employee.")
    `
    INSERT INTO employees (firstName, lastName, role, manager) 
    VALUES (?), [answer.firstName, answer.lastName, answer.role, answer.manager]
    `;
    var roleResponses = [response.tile, response.salary, response.department]
  
    db.query(query, roleResponses, function(err, res){
    if (err) {
      console.log(err);
    }
    console.log(res);
    start();
    })
  })
}

//------------------------------------------------------------------------------

const updateEmps = () => {
  console.log("Updating Employee.")

}

//------------------------------------------------------------------------------

const start = () => {
  initialQuestions();
}

//------------------------------------------------------------------------------

start();



app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

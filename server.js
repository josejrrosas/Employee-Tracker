//getting node packagers
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
//setting port to 3001
const PORT = process.env.PORT || 8008;
const app = express();
//setting data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//creating a connecting to sql database 
const db = mysql.createConnection(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DB_HOST,
  {
    host: 'DB_HOST',
    user: 'DB_USER',
    password: 'DB_PASS',
    database: 'DB_NAME'
  },
  console.log(`Connected to the buesiness_db database.`)
);
//returns a status of 404 if errors out 
app.use((req, res) => {
  res.status(404).end();
});
//shows that the port is being listened to 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const initialQuestions =
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
      if (answer === 'View all departments') {
        viewDept;
      }

      else if (answer === 'View all Roles') {
        viewRoles;
      }

      else if (answer === 'View all employees') {
        viewEmps;
      }

      else if (answer === 'Add a department') {
        addDept;
      }

      else if (answer === 'Add a role') {
        addRole;
      }

      else if (answer === 'Add an employee') {
        addEmps;
      }

      else if (answer === 'Update an employee role') {
        updateEmps;
      }

      else {
        db.end();
        process.exit();
      }
    })
  ;

const viewDept = () => {
  console.log("Viewing Departments.");
  var query = `SELECT * FROM departments;`
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}

const viewRoles = () => {
  console.log("Viewing all Roles.")
  var query = `SELECT * FROM departments;`
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}

const viewEmps = () => {
  console.log("Viewing all Employees.")

}

const addDept = () => {
  console.log("Add Department.")

}

const addRole = () => {
  console.log("Adding Role.")

}

const addEmps = () => {
  console.log("Adding Employee.")
}

const updateEmps = () => {
  console.log("Updating Employee.")

}

const start = () => {
  initialQuestions();
}

start();
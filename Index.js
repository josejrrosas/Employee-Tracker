const inquirer = require('inquirer');

const initialQuestions = 
    inquirer
    .prompt({
        type: 'list',
        name: 'addRole',
        message: 'What would you like to do?',
        choices:[
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
        if(answer === 'View all departments'){
            viewDept;
        }

        else if(answer === 'View all Roles'){
            viewRoles;
        }

        else if(answer === 'View all employees'){
            viewEmps;
        }

        else if(answer === 'Add a department'){
            addDept;
        }

        else if(answer === 'Add a role'){
            addRole;
        }

        else if(answer === 'Add an employee'){
            addEmps;
        }

        else if(answer === 'Update an employee role'){
            updateEmps;
        }

        else{
            return;
        }
    })

    
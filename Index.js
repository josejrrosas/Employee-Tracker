const inquirer = require('inquirer');

const initialQuestions = [
    {
        type: 'list',
        name: 'addRole',
        message: 'What would you like to do?',
        choices:['View all departments',
                'View all Roles', 
                'View al employees', 
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role'
            ],
    }
];


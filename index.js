const fs = require('fs');
const http = require('http')
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require("./lib/Intern");
let manager = [];
let engineers = [];
let interns = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Who is your project manager?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is your manager's employee ID?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?"
    },
    {
        type: 'input', 
        name: 'managerNumber',
        message: "What is your manager's phone number?"
    }
]
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is your engineer's name?"
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is your engineer's employee ID?"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?"
    },
    {
        type: 'input', 
        name: 'engineerGitHub',
        message: "What is your engineer's GitHub username?"
    }
]
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is your intern's name?"
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is your intern's employee ID?"
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?"
    },
    {
        type: 'input', 
        name: 'internSchool',
        message: "What is your intern's school?"
    }
]
const menuOptions = [
    {
        type: 'list',
        name: 'doNext',
        message: 'What would you like to do next?',
        choices: [
            'Add Engineer to team',
            'Add Intern to team',
            'Finish'
        ]
    }
]

inquirer.prompt(managerQuestions).then((answers) => {
    manager = [new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber)];
    console.log(manager);
    inquirer.prompt(menuOptions).then((selection) => {
        
    })
});
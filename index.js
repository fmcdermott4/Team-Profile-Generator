const fs = require('fs');
const http = require('http')
const inquirer = require('inquirer');

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
inquirer.prompt(managerQuestions).then((answers) => {
    console.log(answers);
});
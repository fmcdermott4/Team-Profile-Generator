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
    menu()
    }
);
function menu() {
    inquirer.prompt(menuOptions).then((selection) => {
        switch(selection.doNext){
            case 'Add Engineer to team':
                addEngineer();
                break;
            case 'Add Intern to team':
                addIntern();
                break;
            case 'Finish':
                finish();
                break;
            default:
                console.log("error");
        };
    })
};
function addEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        engineers.push(new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub));
        menu();
    })
};
function addIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
        interns.push(new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool));
        menu();
    })
};
function finish() {
    fs.unlink('./dist/index.html', function (err) {
        if (err) throw err;
    });

    fs.writeFile('./dist/index.html', compileHtml() + `</div></main></body></html>`, function (err) {
        if (err) throw err;
    });
};
function compileHtml() {
    let managerCard = "";
    let engineerCard = "";
    let internCard = "";
    managerCard = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap library -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Document</title>
    </head>
    <body class="row container-fluid col-12 justify-content-around">
    <header class="container-fluid bg-dark text-light mb-5 p-3">
        <div>
            <h1 class="d-flex justify-content-around">My Team</h1>
            <h3 class="ml-auto">
            </h3>
        </div>
    </header>
    <main class="row container-fluid d-flex justify-content-around col-9">
        <div class="card text-white bg-info mb-3 col-xl-3 col-md-5 col-sm-9">
            <div class="card-header">${manager[0].name}</div>
            <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <p class="card-text">ID: ${manager[0].id}</p>
            <p class="card-text">Email: <a href="mailto:${manager[0].email}">${manager[0].email}</a></p>
            <p class="card-text">Phone: ${manager[0].officeNumber}</p>
        </div></div>    
    `
    for( i = 0; i < engineers.length; i++) {
        engineerCard += `<div class="card text-white bg-info mb-3 col-xl-3 col-md-5 col-sm-9">
        <div class="card-header">${engineers[i].name}</div>
        <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text">ID: ${engineers[i].id}</p>
        <p class="card-text">Email: <a href="mailto:${engineers[i].email}">${engineers[i].email}</a></p>
        <p class="card-text">GitHub: ${engineers[i].gitHub}</p>
        </div></div>`
    }
    for( i = 0; i < interns.length; i++) {
        internCard += `<div class="card text-white bg-info mb-3 col-xl-3 col-md-5 col-sm-9">
        <div class="card-header">${interns[i].name}</div>
        <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <p class="card-text">ID: ${interns[i].id}</p>
        <p class="card-text">Email: <a href="mailto:${interns[i].email}">${interns[i].email}</a></p>
        <p class="card-text">School: ${interns[i].school}</p>
        </div></div>`
    }
    return managerCard + engineerCard +internCard;
}
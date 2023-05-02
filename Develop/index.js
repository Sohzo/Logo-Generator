const inquirer = require('inquirer')
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text will the logo have? (type up to 3 characters)',
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'What color should the text be?',
    },
    {
        type: 'input',
        name: 'shape',
        message: 'What shape should the logo be? (Circle, Triangle, or Square)',
        
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'What color should the shape be?',
    }
]

function createSVGfile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Generated logo.svg')
    );
}

function init() {
    inquirer.prompt(questions).then(function (userinput) {
        createSVGfile("logo.svg")
    })
}

init();
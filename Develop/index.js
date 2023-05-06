const inquirer = require('inquirer')
const generateLogo = require('./logogen/generateLogo');
const fs = require('fs');
const {Circle, Triangle, Square} = require("./lib/shapes")

class SVG {
    constructor() {
        this.textdata = ''
        this.shapedata = ''
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapedata}${this.textdata}</svg>`
    }
    
    setTextData(text, color) {
        this.textdata = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    
}


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
        type: 'list',
        name: 'shape',
        message: 'What shape should the logo be?',
        choices: ["Circle", "Triangle", "Square"],
        
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
        createSVGfile("logo.svg", generateLogo(userinput));
    })
}

init();
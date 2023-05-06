const inquirer = require('inquirer')
const fs = require('fs');
const {Circle, Triangle, Square} = require("./lib/shapes");
const { create } = require('domain');

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
    
    setShapeData(shape) {
        this.shapedata = shape.render();
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

    const logoinput = inquirer.prompt(questions);

    var svg = new SVG();
    svg.setTextData();
    svg.setShapeData();
    
    svgFinal = svg.render();

    createSVGfile("logo.svg", svgFinal)
}

init();

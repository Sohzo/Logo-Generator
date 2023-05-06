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

 async function init() {

    const answers = await inquirer.prompt(questions);

        var text = "";
        if (answers.text.length > 3 || answers.text.length < 1) {
            console.log("Please enter 1-3 characters")
            return;
        } else {
            text = answers.text;
        }

        var finalshape;

        if (answers.shape === "Circle") {
            finalshape = new Circle();
        } else if (answers.shape === "Triangle") {
            finalshape = new Triangle();
        } else if (answers.shape === "Square") {
            finalshape = new Square();
        } else {
            return
        }
        
        

        var svg = new SVG();
        svg.setTextData(text, answers.textcolor);
        svg.setShapeData(finalshape);

        svgFinal = svg.render();

        createSVGfile("logo.svg", svgFinal)
}

init();

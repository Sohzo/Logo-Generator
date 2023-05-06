//Created necessary dependancies
const inquirer = require('inquirer')
const fs = require('fs');
const {Circle, Triangle, Square} = require("./lib/shapes");
const { create } = require('domain');

//Creates base SVG class template for future info to be added
class SVG {
    constructor() {
        this.textdata = ''
        this.shapedata = ''
    }
    //Sets the SVG file and has variables for shape and text data
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapedata}${this.textdata}</svg>`
    }
    //Sets the text data and color from user input in terminal
    setTextData(text, color) {
        this.textdata = `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${color}">${text}</text>`
    }
    //Creates the actual shape data inside of a variable, also sets the shapedata variable inside
    setShapeData(shape) {
        this.shapedata = shape.render();
    }
}

//Inquirer questions for the user to answer in the terminal
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

//Function that creates the logo.svg file
function createSVGfile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Generated logo.svg')
    );
}

//Function that intitializes the app
//Async was used due to "await" requiring it
 async function init() {

    //Creates a variable using the user's inputs
    const answers = await inquirer.prompt(questions);

        //Makes sure the text is 1-3 characters
        var text = "";
        if (answers.text.length > 3 || answers.text.length < 1) {
            console.log("Please enter 1-3 characters")
            return;
        } else {
            text = answers.text;
        }
        
        //Makes the shape requested by the user
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
        
        //Colors the shape using the chosen input
        finalshape.setTextColor(answers.shapecolor)

        //Inputs all necessary data
        var svg = new SVG();
        svg.setTextData(text, answers.textcolor);
        svg.setShapeData(finalshape);

        svgFinal = svg.render();

        createSVGfile("logo.svg", svgFinal)
}

init();

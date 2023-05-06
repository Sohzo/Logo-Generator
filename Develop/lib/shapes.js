
//Shape class to store general info needed
class Shape {
    constructor() {
        this.color = ''
    }
    
    setTextColor(color) {
        this.color = color;
    }
}


//Created Circle class using info from shape class
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`
    }
}
//Created Triangle class using info from shape class
class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${this.color}"></polygon>`
    }
}
//Created Square class using info from shape class
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`
    }
}
//Exports the 3 classes needed for the main index.js file
module.exports = {Circle, Triangle, Square};
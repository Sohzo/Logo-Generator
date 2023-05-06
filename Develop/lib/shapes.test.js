const {Circle, Triangle, Square} = require("./shapes");

const shape = new Triangle();
shape.setTextColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const newCircle = new Circle();
newCircle.setTextColor("blue");
expect(newCircle.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue"></circle>');

const newSquare = new Square();
newSquare.setTextColor("blue");
expect(newSquare.render()).toEqual('<rect x="50" height="200" width="200" fill="blue"></rect>');
const {Circle, Triangle, Square} = require("./shapes");



describe('Shape Tests', () => {

    describe('Triangle', () => {
        it("Should return a triangle SVG", () => {
            const shape = new Triangle();
            shape.setTextColor("blue");
            expect(shape.render()).toEqual('<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="blue"></polygon>');
        });
    });

    describe('Circle', () => {
        it("Should return a Circle SVG", () => {
            const newCircle = new Circle();
            newCircle.setTextColor("blue");
            expect(newCircle.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue"></circle>');
        });
    });

    describe('Square', () => {
        it("Should return a Square SVG", () => {
            const newSquare = new Square();
            newSquare.setTextColor("blue");
            expect(newSquare.render()).toEqual('<rect x="50" height="200" width="200" fill="blue"></rect>');
        });    
    });
});
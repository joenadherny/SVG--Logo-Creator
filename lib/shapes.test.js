// lib/shapes.test.js
const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  it('should generate SVG for Circle', () => {
    const circle = new Circle(20, 'blue');
    expect(circle.generateSVG()).toContain('<circle');
  });
});

describe('Triangle', () => {
  it('should generate SVG for Triangle', () => {
    const triangle = new Triangle(30, 'green');
    expect(triangle.generateSVG()).toContain('<polygon');
  });
});

describe('Square', () => {
  it('should generate SVG for Square', () => {
    const square = new Square(25, 'red');
    expect(square.generateSVG()).toContain('<rect');
  });
});

// svgGenerator.js
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');
const SVGRenderer = require('./svgRenderer');

class SVGGenerator {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.svgRenderer = new SVGRenderer(); // Create an instance of SVGRenderer
  }

  generateSVG() {
    let shapeInstance;

    // Create the appropriate shape instance based on user input
    switch (this.shape) {
      case 'circle':
        shapeInstance = new Circle(30, this.shapeColor);
        break;
      case 'triangle':
        shapeInstance = new Triangle(40, this.shapeColor);
        break;
      case 'square':
        shapeInstance = new Square(35, this.shapeColor);
        break;
      default:
        throw new Error('Invalid shape provided');
    }

    // Your text styling logic here (you may want to position it based on the shape)

    // Combine the shape SVG with text SVG
    const svgContent = `<svg width="300" height="200">
      ${shapeInstance.generateSVG()}
      <!-- Add text SVG representation here -->
    </svg>`;

    // Generate a unique filename based on the current timestamp
    const fileName = `logo_${Date.now()}.svg`;

    // Render the SVG using the SVGRenderer
    this.svgRenderer.renderSVG(svgContent, fileName);
  }
}

module.exports = SVGGenerator;

const {Circle, Square, Triangle} = require('./shapes');

describe('Circle class', () => {
    test('renders correctly', () => {
      const circle = new Circle('A', 'black', 'red');
      expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
  
    test('renders text correctly', () => {
      const circle = new Circle('A', 'black', 'red');
      expect(circle.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">A</text>');
    });
  });
  
  describe('Triangle class', () => {
    test('renders correctly', () => {
      const triangle = new Triangle('B', 'white', 'blue');
      expect(triangle.render()).toContain('<polygon points="100,50 150,150 50,150" fill="blue"');
    });
  
    test('renders text correctly', () => {
      const triangle = new Triangle('B', 'white', 'blue');
      expect(triangle.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">B</text>');
    });
  });
  
  
  describe('Square class', () => {
    test('renders correctly', () => {
      const square = new Square('C', 'green', 'yellow');
      expect(square.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="yellow" />');
    });
  
    test('renders text correctly', () => {
      const square = new Square('C', 'green', 'yellow');
      expect(square.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="green">C</text>');
    });
  });
class Circle {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.shapeColor = shapeColor;
      this.textColor = textColor;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
  
    renderText() {
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }


  
  class Triangle {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.shapeColor = shapeColor;
      this.textColor = textColor;
    }
  
    render() {
      
      return `<polygon points="100,50 150,150 50,150" fill="${this.shapeColor}" />`;
    }
  
    renderText() {
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  class Square {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.shapeColor = shapeColor;
      this.textColor = textColor;
    }
  
    render() {
     
      return `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
    }
  
    renderText() {
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  

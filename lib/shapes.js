class Shape {
    constructor(){
        this.color = 'black';
        this.text = '';
        this.textFill = 'black';
    }
}

class Circle {
    constructor(sideLength, color) {
      this.sideLength = sideLength;
      this.color = color;
    }
  
    generateSVG() {
        const radius = this.sideLength / 2;
      return `<circle cx="50%" cy="50%" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  class Triangle {
    constructor(sideLength, color) {
      this.sideLength = sideLength;
      this.color = color;
    }
  
    generateSVG() {
      const height = (Math.sqrt(3) / 2) * this.sideLength;
      const points = `50%,${50 - height / 2} ${50 - this.sideLength / 2},${50 + height / 2} ${50 + this.sideLength / 2},${50 + height / 2}`;
  
      return `<polygon points="${points}" fill="${this.color}" />`;
    }
  }
  
  class Square {
    constructor(sideLength, color) {
      this.sideLength = sideLength;
      this.color = color;
    }
  
    generateSVG() {
      return `<rect x="${50 - this.sideLength / 2}" y="${50 - this.sideLength / 2}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  
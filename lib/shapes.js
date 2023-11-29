// class Shape {
//     constructor(){
//         this.color = 'black';
//         this.text = '';
//         this.textFill = 'black';
//     }
// }

// class Circle {
//     constructor(sideLength, color) {
//       this.sideLength = sideLength;
//       this.color = color;
//     }
  
//     generateSVG() {
//         const radius = this.sideLength / 2;
//       return `<circle cx="50%" cy="50%" r="${this.radius}" fill="${this.color}" />`;
//     }
//   }
  
//   class Triangle {
//     constructor(sideLength, color) {
//       this.sideLength = sideLength;
//       this.color = color;
//     }
  
//     generateSVG() {
//       const height = (Math.sqrt(3) / 2) * this.sideLength;
//       const points = `50%,${50 - height / 2} ${50 - this.sideLength / 2},${50 + height / 2} ${50 + this.sideLength / 2},${50 + height / 2}`;
  
//       return `<polygon points="${points}" fill="${this.color}" />`;
//     }
//   }
  
//   class Square {
//     constructor(sideLength, color) {
//       this.sideLength = sideLength;
//       this.color = color;
//     }
  
//     generateSVG() {
//       return `<rect x="${50 - this.sideLength / 2}" y="${50 - this.sideLength / 2}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
//     }
//   }
  
//   module.exports = { Circle, Triangle, Square };
  // shapes.js

class Shape {
    constructor() {
      this.color = 'black';
      this.text = '';
      this.textFill = 'black';
    }
  
    render() {
      // Implement a default render method for the base Shape class
      return '';
    }
  }
  
  class Circle extends Shape {
    constructor(sideLength, color) {
      super();
      this.sideLength = sideLength;
      this.color = color;
    }
  
    render() {
      const radius = this.sideLength / 2;
      return `<circle cx="50%" cy="50%" r="${radius}" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(sideLength, color) {
      super();
      this.sideLength = sideLength;
      this.color = color;
    }
  
    render() {
      const height = (Math.sqrt(3) / 2) * this.sideLength;
      const points = `50%,${50 - height / 2} ${50 - this.sideLength / 2},${50 + height / 2} ${50 + this.sideLength / 2},${50 + height / 2}`;
      return `<polygon points="${points}" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(sideLength, color) {
      super();
      this.sideLength = sideLength;
      this.color = color;
    }
  
    render() {
      return `<rect x="${50 - this.sideLength / 2}" y="${50 - this.sideLength / 2}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  
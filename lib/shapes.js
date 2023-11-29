// class Circle {
//     constructor(text, textColor, shapeColor) {
//       this.text = text;
//       this.shapeColor = shapeColor;
//       this.textColor = textColor;
//     }
  
//     render() {
//       return `<circle cx="150" cy="100" r='80' fill="${this.shapeColor}" />`;
//     }
  
//     renderText() {
//       return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
//     }
//   }
class Circle {
    constructor(text, textColor, shapeColor, cx, cy, r) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.shapeColor}" />`;
    }

    renderText() {
        return `<text x="${this.cx}" y="${this.cy + 25}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = { Circle };

  
//   class Triangle {
//     constructor(text, textColor, shapeColor) {
//       this.text = text;
//       this.shapeColor = shapeColor;
//       this.textColor = textColor;
//     }
  
//     render() {
//       // Replace this with the actual SVG code for a triangle
//       return `<polygon points="100,50 150, 150 50, 150" fill="${this.shapeColor}" />`;
//     }
  
//     renderText() {
//       return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
//     }
//   }
  
//   class Square {
//     constructor(text, textColor, shapeColor) {
//       this.text = text;
//       this.shapeColor = shapeColor;
//       this.textColor = textColor;
//     }
  
//     render() {
//       // Replace this with the actual SVG code for a square
//       return `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
//     }
  
//     renderText() {
//       return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
//     }
//   }
  
//   module.exports = { Circle, Triangle, Square };
  

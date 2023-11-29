

const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const questions = [
  {
    name: 'text',
    type: 'input',
    message: 'Enter 1-3 letters for your logo text:',
  },
  {
    name: 'textColor',
    type: 'input',
    message: 'Enter the color for your text:',
  },
  {
    name: 'shape',
    type: 'input',
    message: 'Select shape options:',
    choices: ['triangle', 'circle', 'square'],
  },
  {
    name: 'shapeColor',
    type: 'input',
    message: 'Enter color for your shape:',
  },
 
];

function init(){
    inquirer.prompt(questions)
    .then ((data)=>{
        if(data.text.length > 3 || data.text.length < 1){
            console.log ('Please write only 3 letter maximum');
            return init();
        }
        else{
            writeAsFile(data);
        }
    })
}
const path = require('path');

function writeAsFile(data) {
  const svg = generateSVG(data);
  const filePath = path.join(__dirname, 'examples', 'logo.svg');

  fs.writeFile(filePath, svg, (err) => {
    if (err) {
      console.error('Error writing SVG file:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

function generateSVG(data) {
    let shape;
  
    if (data.shape.toLowerCase() === 'circle') {
      shape = new Circle(data.text, data.textColor, data.shapeColor, 150, 100, 80);
    } else if (data.shape.toLowerCase() === 'square') {
      shape = new Square(data.text, data.textColor, data.shapeColor);
    } else if (data.shape.toLowerCase() === 'triangle') {
      shape = new Triangle(data.text, data.textColor, data.shapeColor);
    } else {
      console.log('Invalid shape selection');
      return '';
    }
  
    return `
      <svg version='1.1' width='300' height='200' xmlns='https://www.w3.org/2000/svg'>
        ${shape.render()}
        ${shape.renderText()}
      </svg>`;
  }
  init();





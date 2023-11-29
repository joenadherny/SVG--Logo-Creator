const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle}= require('./lib/shapes');


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
    choices: ['triangle', 'circle', 'square']
    },
    {
        name: 'shapeColor',
        type: 'input',
        message: 'Enter color for your shape:',
    }
];
async function generateAndWriteSVG(answers) {
    let shape;
  
    // Create the corresponding shape object based on the user's selection
    switch (answers.shape.toLowerCase()) {
      case 'triangle':
        shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
        break;
      case 'circle':
        shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
        break;
      case 'square':
        shape = new Square(answers.text, answers.textColor, answers.shapeColor);
        break;
      default:
        console.log('Invalid shape selection');
        return;
    }
  
    const svgCode = shape.generateSVG();
  
    // Save the SVG file in the 'examples' folder
    fs.writeFileSync('examples/logo.svg', svgCode);
  
    console.log('Generated examples/logo.svg');
  }
  

async function promptUser() {
  const answers = await inquirer.prompt(questions);

  
  await generateAndWriteSVG(answers);
}


promptUser();

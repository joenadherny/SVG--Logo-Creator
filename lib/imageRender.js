const fs = require("fs");
const path = require("path");

class SVGRenderer {
  constructor(outputFolder = path.join(__dirname, "..", "examples")) {
    this.outputFolder = outputFolder;
  }

  renderSVG(svgContent, fileName) {
    const filePath = path.join(this.outputFolder, fileName);

    fs.writeFileSync(filePath, svgContent);
    console.log(`Rendered ${fileName} in the examples folder.`);
  }
}

module.exports = SVGRenderer;

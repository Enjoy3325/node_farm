const fs = require('fs');


const textIn = fs.readFileSync('./text/inputText.txt', 'utf-8');
console.log(textIn);

const textOut = `This is my expiriance about the car: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./text/outputText', textOut) 
const fs = require('fs');

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam similique recusandae assumenda quas consequatur. Iste iusto maiores distinctio, nihil eaque ea aperiam accusamus perferendis, minus dolorum perspiciatis, consectetur quibusdam.';

const propText = {
  originalContent: text,
  changedContent: text.toUpperCase(),
  textLenght: text.length,
};

const handleWriteFile = (err) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('The file has been saved');
  }
};

fs.writeFile('./output.txt', JSON.stringify(propText), handleWriteFile);

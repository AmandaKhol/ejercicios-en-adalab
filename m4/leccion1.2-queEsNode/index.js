const fs = require('fs');

const textProps = {
  originalContent: 'Lorem ipsum',
  changedContent: 'LOREM IPSUM',
  textLenght: 11,
};

const readFile = (fileName, callback) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.log('Error:', err);
    } else {
      callback(data);
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log('Error:', err);
    } else {
      callback();
    }
  });
};

readFile('./input-file.txt', (fileContent) => {
  const textProps = {
    originalContent: fileContent,
    changedContent: fileContent.toUpperCase(),
    textLenght: fileContent.length,
  };
  writeFile('./output-read-write.txt', JSON.stringify(textProps), () =>
    console.log('The files has been copied')
  );
});

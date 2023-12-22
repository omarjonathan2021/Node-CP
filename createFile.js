const fs = require('fs');

// Content to write to the file
const fileContent = 'Hello Node';

// File name
const fileName = 'welcome.txt';

// Write to the file
fs.writeFile(fileName, fileContent, (err) => {
  if (err) throw err;
  console.log(`File "${fileName}" has been created with content: "${fileContent}"`);
});

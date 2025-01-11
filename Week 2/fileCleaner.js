const fs = require('node:fs/promises');

fs.readFile('read.txt' , 'utf-8')
.then((data) => {
    let content = data.toString();
   
    let result = content.replaceAll(/ +/g , ' ');
        return fs.writeFile('read.txt' , result)
    
})
.then(() => {
    console.log("File written successfully")
})
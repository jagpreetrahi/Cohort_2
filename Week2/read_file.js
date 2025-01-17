const  fs = require('node:fs');


fs.readFile('read.txt'  , 'utf-8' , (err , data) => {

    if(err){
        console.log(err.message);
        return;
    }

})




// for writeFIle functionality

/**
    const filecontent = data.toString();
 * fs.writeFile('read.md' , filecontent , 'utf-8' , (err) =>  {

        if(err){
            throw err
        }
        console.log("The file content successfully write there")
    });
 */









const express =require('express');
const fs = require('fs');
const path  = require('path');
const PORT  = 4004;

const app = express();



app.get('/files' , (req ,res) => {
   fs.readdir((__dirname , './files/') , (err , files) => {
    if(err) throw err;
     return res.status(200).json(files);
    
   });
})

app.get('/files/:filename' , (req , res) => {
    
    const filepath = path.join(__dirname , './files/' , req.params.filename);
    
    fs.readFile(filepath , 'utf-8' , (err ,data) => {
        if(err){
           return res.status(404).send("Not found");
        }
        else{
            return res.status(200).send(data);
        }
    })
})

app.all( '*', (req , res) => {
    res.status(404).json({
        message : "Not found this route"
    })
})
app.listen(PORT , () => {
    console.log(`Successfully run on port ${PORT}`)
})
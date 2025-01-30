const express = require('express');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(cors())
app.use(express.json());


app.get('/sum' , function (req , res) {
    const a = req.query.a;
    const b = req.query.b;
    if(!isNaN(a) && !isNaN(b)){
        const sum = parseInt(a) + parseInt(b);
       return  res.json(sum)
    }

    else{
        res.status(400).json({
            message : "Invalid nUmber"
        })
    }

   
     
    
})


app.listen(PORT , () => {
    console.log(`server is run successfully ${PORT}`);
})
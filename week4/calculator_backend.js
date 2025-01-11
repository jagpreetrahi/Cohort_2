const express = require('express');

const PORT = 3010;

const app = express();


app.use(express.json());


app.get('/sum' , function (req , res) {
    const a = req.query.a;
    const b = req.query.b;
    console.log(b);
    const sum = a + b;
    return res.send(sum);
})


app.listen(PORT , () => {
    console.log(`server is run successfully ${PORT}`);
})
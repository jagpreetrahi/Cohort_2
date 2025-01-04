const express = require('express');

const app = express();

let errorcount = 0;
let PORT = 5003



app.get('/user', function(req, res) {
    throw new Error("User not found");
    res.status(200).json({ name: 'john' });
});
  
app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorcount });
});

app.use(function (err, req, res ,next){
  
    res.status(404).send({});
    errorcount++;
    
});


app.listen(PORT, ()=> {
    console.log(`Server is run on port ${PORT}`);
})
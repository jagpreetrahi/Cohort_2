const express = require('express');
const PORT = 1000;
const app = express();

let total_time = 0; // total time by all requests;
let requestCount = 0; // request count 

function avg_time(req , res, next){

    const start_time = Date.now();

    // finish event -> it ensure that a response sends to the client successfully
    res.on('finish' , () => {
        const end_time = Date.now();
        const duration = end_time - start_time;
        
        total_time += duration;
        requestCount += 1;

        const avg = total_time / requestCount;
        console.log(`Request handle in ${duration}s. Avg Time : ${avg.toFixed(2)}s.`)
    })

    next();
}


app.use(avg_time);
app.get('/user' , (req , res) => {
    
    setTimeout(() => {
        res.status(200).send("I am great")
    }, 2000)
})




app.listen(PORT , () => {
    console.log(`Successfully run on PORT ${PORT}`)
}) 
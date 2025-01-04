const express = require('express');

const app = express();

let ratelimiterForUser = {};
setTimeout(() => {
    ratelimiterForUser = {};
}, 1000)

function ratelimiter(req , res ,next){
    const userId = req.headers["user.Id"];

    if(ratelimiterForUser[userId]){
        ratelimiterForUser[userId] = ratelimiterForUser[userId] + 1;
        if(ratelimiterForUser[userId] > 5){
            res.status(404).send("no entry");
        }
        else {
            next();
        }
    }
    else{
        ratelimiterForUser[userId] = 1;
        next();
    }

   
}
app.use(ratelimiter);

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
  });
  
app.post('/user', function(req, res) {
res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
res.status(200).json({ requestCount });
});


app.listen(5002, ()=> {
    console.log(`Server is run on port `)
})
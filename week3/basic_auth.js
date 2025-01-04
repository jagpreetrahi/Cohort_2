const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = '12345';
const PORT = 5000;
const app = express();

app.use(express.json());

const dummy_users = [{
    username : "jaggy@gmail.com",
    password : '1234',
    name : "John Deo"
},
{
    username : "john@gmail.com",
    password : '134',
    name : "John "
},
{
    username : "venom@gmail.com",
    password : '124',
    name : "John 2 "
}]

function userExit(username , password){
    const result = dummy_users.some((item) => item.username === username && item.password === password);
    return result ;
    
}

app.post('/signup' ,  (req ,res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExit(username , password)){
        return res.status(403).json({
            msg : "This user is not exits "
        })
    }
   var token = jwt.sign({username : username} , jwtPassword)
    return res.json({
      token,
    })


})

app.get('/user' , function (req ,res){
    const token = req.headers.authorization;
    console.log(token);
    try {
        const decode = jwt.verify(token, jwtPassword);
        console.log(decode);
        const username = decode.username;

        console.log(username);
        if(!dummy_users.some((user) => user.username === username)){
            return res.status(404).json({
                msg : "Unauthorizes Access"
            })
        }

        const otherUser = dummy_users.filter((item) => item.username != username);
        console.log(otherUser);
        return res.json({
            otherUser
        })
    } catch (error) {
        res.status(404).json({
            msg : "Invalid-Token" 
        })
    }
})



app.listen(PORT , () => {
    console.log(`The current port is run on ${PORT}`)
})


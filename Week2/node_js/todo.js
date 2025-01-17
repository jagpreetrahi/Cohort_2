const express = require('express');
const app = express();
const PORT = 3002;
app.use(express.json());


let todos = [];



app.get('/todos' , (req, res) => {
    res.status(200).json({
        todos,
    })
})

app.get('/todos/:id' , (req ,res) => {
    const todo_id = parseInt(req.params.id); // i need only number
    const todo = todos.find(item => item.id === todo_id); // return element after matches
 
    if(!todo){
        res.status(404).json({message : "Not found the current todo"});
    }

    
    res.status(200).json(todo);
    
})

app.post('/todos' , (req , res) => {
    const newTodo = {
        id : Math.floor(Math.random() * 10000000),
        "title" : req.body.title,
        "description" : req.body.description
        
    };
    todos.push(newTodo);
    res.status(201).json({
        newTodo
    });
  
    
   
})

app.delete('/todos/:id' , (req ,res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.findIndex(item => item.id === todoId);
    
    if(todo === -1){ // means todo not found
        res.status(404).json({message : "Your todo is not available here"});
    }

    todos.splice(todo ,1);
    
    res.status(200).json({
        message : "Successfully deleted"
    })
    
   
})

app.put('/todos/:id' , (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.findIndex(item => item.id === todoId);
    

    if(todo === -1){
        res.status(404).json({
            message : "Not able to update the current todo due to unavail"
        })
    }
    todos[todo].title = req.body.title;
    todos[todo].description = req.body.description;
    res.json(todos[todo]);

})


app.listen(PORT , () => {
    console.log(`Successfully run on Port 3002 ${PORT}`)
    console.log("hi there");
})

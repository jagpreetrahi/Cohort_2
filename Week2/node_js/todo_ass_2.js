const express  = require('express');
const fs = require('fs');

const app = express();
const PORT = 3009;
app.use(express.json());


function findIndex(arr, id){
   
    for(let i = 0; i<arr.length; i++){
        
        if(arr[i].id === id){
            return i
        }
       
    }
    return -1;
}






app.get('/todos' , (req , res) => {
   fs.readFile('todo-server.json' , 'utf-8' , (err ,data) => {
    if(err) throw err;
    res.json(JSON.parse(data));
   })
  
})

app.get('/todos/:id' , (req, res) => {
    fs.readFile('todo-server.json' , 'utf-8' , (err ,data) => {
       if(err) throw err;
    const todoId = parseInt(req.params.id);
    const todo = JSON.parse(data); // parse the data
    console.log(todo);
    const final_todo = findIndex(todo , todoId)

    if(final_todo === -1){
        res.status(404).json({

            message : "Not found"
        })
    }
    res.status(200).json({
       final_todo
    })
    })
    
})

app.delete('/todos/:id' , (req , res) => {
    fs.readFile('todo-server.json' , 'utf-8' , (err, data) => {
        if(err) throw err;

        const todoId = parseInt(req.params.id);
        let todo = JSON.parse(data);
        const final_todo = findIndex(todo , todoId);

        if(final_todo === -1){
            res.status(404).json({
                message : "Not found"
            })
        }

        todo.splice(final_todo , 1);
        res.status(200).json({
            message : "Successfully deleted"
        })      
    })
});

app.put('/todos/:id' , (req , res) => {
    fs.readFile('todo-server.json' , 'utf-8', (err , data) => {
        let todos = JSON.parse(data);
       
        const todoId = parseInt(req.params.id);
        const todo = findIndex(todos , todoId);
        
        if(todo === -1){
            res.status(404).json({
                message : "Not able to update the todo"
            })
        }
        else{
            let updateTodo = {
                id : todos[todo].id,
                title : req.body.title,
                description : req.body.description
            }
            console.log(todos[todo]);
            todos[todo] = updateTodo;
            fs.writeFile('todo-server.js', JSON.stringify(todos) , (err) => {
                if(err) throw err;
                res.status(200).json(updateTodo);
            })
        }
        
    })
})

app.post('/todos' , (req, res) =>  {
    const newTodo = {
        id : Math.floor(Math.random() * 10000),
        "title" : req.body.title,
        "description" : req.body.description
    };
    fs.readFile('todo-server.json' ,'utf-8' , (err , data) => {
        let todos = [];
        if(err) throw err;
         todos = JSON.parse(data);
         console.log(todos);
        todos.push(newTodo);
        
       
       
        fs.writeFile('todo-Server.json' , JSON.stringify(todos , null , 2) , (err) => {
            if(err) throw err;
            res.status(201).json(newTodo);
        })
    })
    
})

app.use((req, res , next) => {
   res.status(404).json({
    message : " Route not found"
   })
})

app.listen(PORT , () => {
    console.log(`Successfully run on port ${PORT}` )
})
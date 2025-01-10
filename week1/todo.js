class Todo{

    
    constructor(){
        console.log("Making Own To Do List !!!");
        this.myTodo = [];
        
    }


    add(todo){
       
        this.myTodo.push(todo);
       return this.myTodo;
    }

    remove(indexOfTodo){
        for(let i = 0; i<this.myTodo.length; i++){
            if(indexOfTodo == i){
               this.myTodo.splice(indexOfTodo,1);
            }
           
        }
        return this.myTodo
    }

    update(index , updateTodo){
       for(let i = 0; i<this.myTodo.length; i++){
           if(index == i){
              this.myTodo[index] = updateTodo
           }
       }
       return this.myTodo;
    }

    get(indexOfTodo){
        if(indexOfTodo <= this.myTodo.length){
          
                  
          return this.myTodo[indexOfTodo];
            
        }
    }

    getAll(){
       return this.myTodo;
    }

    clear(){
       return this.myTodo = [];
    }
}

const todo_list = new Todo();
const add_todo = todo_list.add("HomeWork");
const add_todo1 = todo_list.add("Jagpreet");
const add_todo2 = todo_list.add("Singh");
const add_todo3 = todo_list.add("Rahi");
console.log("The added todo is " , add_todo);
const all_todo = todo_list.getAll();


const remove_todo = todo_list.remove(1);
console.log("The current  todo is remove from index " , remove_todo);
console.log("All todo " , all_todo);
const update_todo = todo_list.update(0 , "Jagpreet");
console.log("The updated To-Do is " , update_todo);
const one_todo = todo_list.get(2);
console.log("One todo " , one_todo);
const delete_todo = todo_list.clear();
console.log("clear todo " , delete_todo);




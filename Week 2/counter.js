
// setInterval(() => {
//     console.log(counter++);
// } , 1000);

function counter(n){
    let count = 0;
    for(let i = 0; i<n; i++ ){
        setTimeout(() => {
            console.log(counter++)
          
        
        } , 1000)
    }
  
}

counter(5)







function counter(n){
    let count  = 0
    // using delay of time 
     for(let i = 0; i<=n; i++){
         setTimeout(() => {
           console.log("The counter value is " ,count++)
        } , i * 1000) // here the actual time would be delay by 1s for each iteration

    }
    //

    /* using recursion
        function logCount(){
            if(count < n){
                console.log(count++);
                setTimeout(logCount , 1000);
            }
        }
    

        logCount();
    */
}

counter(10)










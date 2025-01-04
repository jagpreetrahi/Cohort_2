function sleep(millisecond){
    return new Promise(function (resolve){
        const endTime = Date.now() + millisecond;  // for busy wait thread i use Date.now() which give
        //  current TS + millisecond 
        while(Date.now() < endTime ){
            resolve("hello world");
        }
     
    })
}
   

const result = sleep(300);
result.then(function (value){
    console.log(value);
})
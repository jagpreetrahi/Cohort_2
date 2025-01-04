function wait1(t1){
    return new Promise(function (resolve) {
        setTimeout(() => {
           resolve("hello")
        } , t1 * 1000)
    })
 }
 
 function wait2(t2){
     return new Promise(function (resolve) {
         setTimeout(() => {
            resolve("World")
         } , t2 * 1000)
     })
 }
 
 function wait3(t3){
     return new Promise(function (resolve) {
         setTimeout(() => {
            resolve("Hey")
         } , t3 * 1000)
     })
 }
 
 async function  calculateTime(t1,t2,t3){
     let startTime = Date.now();
     wait1(t1);
     wait2(t2);
     wait3(t3);
 
 
   
 }
 
 const result  = calculateTime(2,1,3);
 result.then((totalTime)=> {
     console.log(`The total time require for all these operations is ${totalTime}`);
 })
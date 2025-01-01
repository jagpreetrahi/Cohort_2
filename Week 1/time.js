function calculateTime(n){
   let start = new Date();
   let sum = 0;
   for(let i = 1; i<n; i++){
       sum += i;
   }

   let end = new Date();
   let executionTime = end - start;

  
    
   return  executionTime
}

const result = calculateTime(1000000000);
console.log("The time in millisecond " , result);
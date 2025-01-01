function isAnagram(str1 , str2){
   if(str1.length == str2.length){
      for(let char of str1){ // iterate through characters of str1
        if(str2.includes(char)){
            return true;
        }
      }
      
   }
   return false;
}

//  By using Set 
// function isAnagram(str1 , str2){
//     if(str1.length == str2.length){
//         const set = new Set(str1); // store unique value
//         for(let char of str2){
//             if(set.has(char)){
//                 return true;
//             }
//         }
//     }
//    return false;
// }

const result = isAnagram("hello!" , "hello");
console.log("The result is " , result);
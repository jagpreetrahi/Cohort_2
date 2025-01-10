function countVowels(str){
   let converse = str.toLowerCase();
   if(!str){
      return 0;
   }
   let vowels = ['a' , 'e' , 'i' , 'o' , 'u'];
   let count = 0;
   for(let i = 0; i<converse.length; i++){
     if(vowels.includes(converse[i])){
        count++;
     }
   }
   return count;
}

const result = countVowels("HelloWorld I am a Jagpreet SIngh");
console.log("The count of the vowel in given string " , result);



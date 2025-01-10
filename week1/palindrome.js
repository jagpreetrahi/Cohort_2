function isPalindrome(str){
   let converse = str.toLowerCase();
   
   let resultant = converse.split('').reverse().join('');
   if(resultant == converse){
    return true;
   }
   return false
}

const result = isPalindrome("PEEP");
if(result == true){
    console.log("The given string is palindrome")
}
else{
    console.log("Given string is not palindrome")
}

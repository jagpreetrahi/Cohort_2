const  jwt = require('jsonwebtoken');
const { Container } = require('winston');
const jwtPassword = 'secret';


function signUp(username , password){
    let str = '@gmail.com';
    let lengthPassword = 6;
    
    if(username.includes(str) && password.length === lengthPassword){
        var token = jwt.sign({username : username} , password);
        
        return {
            token,
        };
    }
    else{
        return null;
    }

    
}

function verifyjwt(token){
   try {
      const parts = token.split('.');
      if(parts.length !== 3){
          return false;
      }

      const [headerBase64 , payloadBase64 , signature] = parts

      // recreate the signature
      const data = `${headerBase64}.${payloadBase64}`;
      const exptected_sign = createHmacSHA256(data , jwtPassword);

      if(signature !== exptected_sign){
        return false;
      }

      // decode the payload and check for expiration 
      
      const payloadJson = atob(payloadBase64);
      const payload =  JSON.parse(payloadJson);

      if(payload.exp && Date.now() >= payload * 1000){
           return false
      }

      return true;
    } catch (error) { 
        return false;
   }
}

function decodejwt(token){
    try {
        const parts = token.split('.');
        if(parts.length !== 3){
            return false;
        }

        const payloadParse = parts[2];
        console.log(payloadParse);
        const payloadJson = atob(payloadParse);
        
        
        return JSON.parse(payloadJson);
    } catch (error) {
        return false
    }
    
}



// let result = signUp("jagpreet@gmail.com" , "123456");
// let result1 = signUp("abc@gmail.com" , "234561");
let result2 = decodejwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE3MzY1Nzk0NjF9.vMM2Fhzebe-PWpSVvBHWmkfyfnmCUX7iyy8rXNI1z70');


console.log(result2);
// console.log(result1);



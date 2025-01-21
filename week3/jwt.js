const  jwt = require('jsonwebtoken');
const {z} = require('zod');

const jwtPassword = 'secret';

// define the schema is the first thing for zod
const usernameSchema = z.string().email({message : "Invalid email"});
const passwordSchema = z.string().min(6, {message : "Must be 6 character long"});

//sign up function
function signUp(username , password){
    
   try {
      const validateUser = usernameSchema.parse(username);
      
      const validatePassword = passwordSchema.parse(password);
      

      const token = jwt.sign({username : validateUser} , jwtPassword );
      console.log("user and password validated successfully");
      return token;
     
    
   } catch (error) {
        if(error instanceof z.ZodError){
            console.log("Error is ", error.errors);
            return null;
        }
        
        console.log("Unepected error occur" , error);
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
      
      const payloadJson = atob(payloadBase64); // this function used to decode a string of base64 encoding data to its original form
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
let result1 = verifyjwt("yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphZ3ByZWV0QGdtYWlsLmNvbSIsImlhdCI6MTczNzIxMzA1NH0.-TlzLU6fIBV5aXneW5gfxDMTAm2KwuntwtkkFk8M1CM")

// let result2 = decodejwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE3MzY1Nzk0NjF9.vMM2Fhzebe-PWpSVvBHWmkfyfnmCUX7iyy8rXNI1z70');

console.log(result1);
// console.log(result);




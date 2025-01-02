class Calculate{
    
    constructor(){
        console.log("Simple Calculator");
        this.result = 0;      
        
    }

    
    add(number) {
        return  this.result += number;
    }

    substract(number){
        return  this.result -= number;
    }

    clear(){
        return  this.result = 0;
    }

    multiply(number){
      return  this.result *= number;
    }

    divide(number){
        if(number == 0){
            console.log("The number should not be zero")
        }
       return this.result /= number
    }

    getResult(){
        return this.result;
    }

    calculate(number_str){
       
       let expression = number_str.replace(/\s+/g, '');
       
        try {
            const non_numerical = /[^0-9+\-*/().\s]/; //  regular expression 
            for(let char of expression){
              if(non_numerical.test(char)){
                 return  true; // invalid character found
              }
              
            }
            
            
           //  evaluate if it is valid character
           const result = new Function(`return ${expression}`)(); // create a new function which execute the epxression
           return result;
            
        } catch (error) {
            throw new Error("This is the invalid character" , error)
        }
    }
}

const number = new Calculate();
console.log( "The added first number is ",number.add(5));
console.log( "The second added number is ",number.add(5));
console.log( "The first substract number is ",number.substract(2));
console.log("The first multiply number is ",number.multiply(2));
console.log("The first divide number is ",number.divide(2));
console.log("THe total result is",number.getResult(2));
console.log("THe clear result is",number.clear());
console.log(number.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7 "));

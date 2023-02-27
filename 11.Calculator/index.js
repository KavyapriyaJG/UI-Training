//=========== OBJECT - CALCULATOR ================
Calculator= {
        isValid : /**
                  * Type checking - for checking both parameters are of type number
                  * @param number value1
                  * @param number value2
                  * @return boolean
                  **/
                function (value1, value2) {
                    return typeof value1=='number' && typeof value2=='number'; 
                },

    addition : /**
                  * Adds two numbers
                  * @param number value1
                  * @param number value2
                  * @return number
                **/
                function (value1, value2){
                    if (this.isValid(value1, value2))    
                        return value1+ value2;
                    else  
                        console.log("Enter 2 valid numbers"); 
                },
        
    subtraction : /**
                  * Subtracts two numbers
                  * @param number value1
                  * @param number value2
                  * @return number
                  **/
                  function (value1, value2){
                      if (this.isValid(value1, value2))   
                          return value1- value2;
                      else  
                          console.log("Enter 2 valid numbers");
                  },

    multiplication : /**
                      * Multiplies two numbers
                      * @param number value1
                      * @param number value2
                      * @return number
                      **/
                      function (value1, value2){
                          if (this.isValid(value1, value2))  
                              return value1* value2;
                          else  
                              console.log("Enter 2 valid numbers");
                      },

    division : /**
                  * Divides two numbers
                  * @param number value1
                  * @param number value2
                  * @return number
                **/
                function (value1, value2){
                    if (this.isValid(value1, value2))    
                        return value1/ value2;
                    else  
                        console.log("Enter 2 valid numbers");
                }

}

number1 = 20;
number2 = 10;

console.log("CALCULATOR");


console.log(number1 + " + " + number2 + " = " + Calculator.addition(number1, number2) + "\n");
console.log(number1 + " - " + number2 + " = " + Calculator.subtraction(number1, number2) + "\n");
console.log(number1 + " * " + number2 + " = " + Calculator.multiplication(number1, number2) + "\n");
console.log(number1 + " / " + number2 + " = " + Calculator.division(number1, number2) + "\n");

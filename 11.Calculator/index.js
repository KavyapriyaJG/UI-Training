//=========== OBJECT - CALCULATOR ================
Calculator= {
    /**
     * Type checking - for checking both parameters are of type number
     * @param number value1
     * @param number value2
     * @return boolean
    **/     
    isValid : function (value1, value2) {
                    return typeof value1=='number' && typeof value2=='number'; 
              },

    /**
     * Adds two numbers
     * @param number value1
     * @param number value2
     * @return number
    **/            
    addition : function (value1, value2){
                    if (this.isValid(value1, value2))    
                        return value1+ value2;
                    else  
                        console.log("Enter 2 valid numbers"); 
               },
    
    /**
     * Subtracts two numbers
     * @param number value1
     * @param number value2
     * @return number
    **/              
    subtraction : function (value1, value2){
                        if (this.isValid(value1, value2))   
                            return value1- value2;
                        else  
                            console.log("Enter 2 valid numbers");
                  },

    /**
     * Multiplies two numbers
     * @param number value1
     * @param number value2
     * @return number
    **/          
    multiplication : function (value1, value2){
                        if (this.isValid(value1, value2))  
                            return value1* value2;
                        else  
                            console.log("Enter 2 valid numbers");
                     },

    /**
     * Divides two numbers
     * @param number value1
     * @param number value2
     * @return number
    **/     
    division : function (value1, value2){
                    if (this.isValid(value1, value2))    
                        return value1/ value2;
                    else  
                        console.log("Enter 2 valid numbers");
               }

}

number1 = 20;
number2 = 10;

console.log("CALCULATOR");


console.log(number1 + " + " + number2 + " = " + Calculator.addition(number1, number2));
console.log(number1 + " - " + number2 + " = " + Calculator.subtraction(number1, number2));
console.log(number1 + " * " + number2 + " = " + Calculator.multiplication(number1, number2));
console.log(number1 + " / " + number2 + " = " + Calculator.division(number1, number2));


Calculator= {
    isValid : function (value1, value2) {return typeof value1=='number' && typeof value2=='number'; },

    addition : function (value1, value2){
        if (this.isValid(value1, value2)==true)  return value1+ value2;
        else  console.log("Enter 2 valid numbers"); },
        
    subtraction : function (value1, value2){
        if (this.isValid(value1, value2)==true)  return value1- value2;
        else  console.log("Enter 2 valid numbers");},

    multiplication : function (value1, value2){
        if (this.isValid(value1, value2)==true)  return value1* value2;
        else  console.log("Enter 2 valid numbers");},

    division : function (value1, value2){
        if (this.isValid(value1, value2)==true)  return value1/ value2;
        else  console.log("Enter 2 valid numbers");}

}

number1 = 20;
number2 = 10;

console.log("CALCULATOR");


console.log(Calculator.addition(number1, number2));
console.log(Calculator.subtraction(number1, number2));
console.log(Calculator.multiplication(number1, number2));
console.log(Calculator.division(number1, number2));

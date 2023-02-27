console.log("---------------------Section 1 - Play with variables------------------------")
console.log(1+2);
console.log("apple"+"orange");

console.log(1+2+"apple");
console.log("apple"+1+2);

console.log(1+true);

console.log(0 ==  false);
console.log(1 === true);
console.log(2 == "2");

console.log("\n---------------------Section 2 - Play with Arrays------------------------")
cricketTeam = ["Dhoni","Kholi","Raina","Jadeja","Bumrah","Natraj","Bhuvi","Ashwin","Rishab","KL Rahul","Gill"]
console.log("Playing 11 ready \n" + cricketTeam) //create team 11

console.log("Oops! Captain -- "+cricketTeam.shift()+ " got injured" ) //remove first
console.log("Now we are a team of -- "+cricketTeam.length) //length
cricketTeam.push("Sanju") //add new element
console.log("New player joined -- "+ cricketTeam[10])
cricketTeam.sort() //sort
console.log("In ascending order of names\n" + cricketTeam)

//assiging random jersy number 
team = {}
uniqueJerseyNumbers = [];
while(uniqueJerseyNumbers.length <11){
    number = Math.floor(Math.random() * 1000);
    if(number>0) 
        uniqueJerseyNumbers.push(number);
}
for(i=0;i<11;i++){
    team[cricketTeam[i]] = uniqueJerseyNumbers[i];
}
console.log("Players with their jersey number\n");
console.log(team);

//store in new array with uppercase names
upperCaseNames = cricketTeam.map(changeCase);
function changeCase(val){
    return val.toUpperCase();
}
console.log("Upper Case name list\n");
console.log(upperCaseNames);


console.log("\n---------------------Section 3 - Play with functions------------------------")
//1. display between a range
display(1,3);
function display(minValue, maxValue){
    for(i=minValue;i<=maxValue;console.log(i),i++);
}

//2. format a date
today = new Date();
format(today);
function format(today){
    console.log("Formatted Date is "+ today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear());
    //console.log(typeof(today)+"  "+typeof(today.getDate()));
}

//3. celcius to fahrenheit conversion
convert_temperature(30);
function convert_temperature(celcius){
    fahrenheit =  (celcius*1.80)+32;
    console.log(fahrenheit+"°F");
}

//4. find average
scores = {"html" :100, "css" : 90, "js" :80};
average = (marks)=> {
    n = marks.length;
    sum=0;
    for(i=0;i<n;i++)
        sum+=marks[i];
    return sum/n;
}
console.log("Web Dev knowledge is "+ average(Object.values(scores)));

//5. Reversing a String
var reverse = function(str){
    n = str.length;
    ansString = ""
    while(--n >= 0){
        ansString+=str[n];
    }
    console.log(str+"'s reversed string is "+ansString);
}  
targetString = "Sirius";
reversedString = reverse(targetString);
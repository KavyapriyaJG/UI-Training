import {data} from './assets/friends.js';

console.log(data)

//debugger;

//Length of the Object
let length = data.length;

for(let i = 0; i < length; i++) {

    //Fetching template and cloning the entire class with its lineage
    let node = document.querySelector(".contentWrapper").lastElementChild;
    let clone = node.cloneNode(true);

    //New ID updation for the clone
    node.setAttribute("id", "element" + i);

    //Setting Attributes for the clone
    let pic = data[i].img;
    let name = data[i].first_name + " " + data[i].last_name;
    let mail = data[i].email;

    document.querySelector("#element" + i + " .friendPic").setAttribute("src", pic);
    document.querySelector("#element" + i + " .friendName").innerHTML = name;
    document.querySelector("#element" + i + " .friendMail").innerHTML = mail;

    //Introducing clone to existing DOM
    document.querySelector(".contentWrapper").appendChild(clone);
}


//Removing the template for the clones from the DOM
let lastChildNode = document.querySelector(".contentWrapper").lastElementChild;
document.querySelector(".contentWrapper").removeChild(lastChildNode);
            
//Aliter for removal - document.querySelector("#element").remove();
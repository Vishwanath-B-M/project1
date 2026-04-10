//document.addEventListener("input",keydown);
//function keydown(event){
  //  const length=document.getElementById("length").value;
//const p=document.getElementById("p");
 //   p.textContent =  length;
   // text.textContent="this is the password length"
    // if(event.key==="Backspace"){
    //p.textContent = " ";

//}
//};
//document.addEventListener("keydown",ent);
//function ent(event){
//    if(event.key==="enter"){
//         "this is the password length";
 ///   }


//}
function generate(){
const lengthvalue=Number(document.getElementById("length").value);
const uppercasevalue=document.getElementById("uppercase").checked;
const lowercasevalue=document.getElementById("lowercase").checked;
const symbolvalue=document.getElementById("symbol").checked;
const numbervalue=document.getElementById("number").checked;
const pass=document.getElementById("p");
const text=document.getElementById("text");
let password= "";



const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrswvuxyz";
const symbol="!@#$%^&*():,.[]}{";
const number="1234567890";
let allchar= "";



if(uppercasevalue) allchar+=uppercase;
if(lowercasevalue) allchar+=lowercase;
if(symbolvalue) allchar+=symbol;
if(numbervalue) allchar+=number;

if (lengthvalue===0){
  text.textContent="you must choice lenght";
  return;
}
if(allchar=== ""){
    text.textContent="you have to choice above options";
    return;
}

for(let i=0;i<lengthvalue;i++){
     let randomindex = Math.floor(Math.random()*allchar.length);
     let randomindexword=allchar[randomindex];
    password += randomindexword;
}
text.textContent =  password;
};

function copy(){
  const text=document.getElementById("text").innerText;
  navigator.clipboard.writeText(text); 
}

document.addEventListener("click",gree);

function gree(event){
  input.classList.add("green");
  }

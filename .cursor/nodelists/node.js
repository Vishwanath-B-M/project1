//let buttonall=document.querySelectorAll(".button");


//buttonall.forEach(button=>{
    //button.addEventListener("mouseover",event=>{
        //event.target.style.backgroundColor="skyblue";
    //})

//});
//buttonall.forEach(button=>{
   // button.addEventListener("mouseout",event=>{
       // event.target.style.backgroundColor="white";
   // })
//});
//buttonall.forEach(add);
//function add(button){
   // button.addEventListener("click",mut)
//};
////function mut(event){
   // event.target.style.backgroundColor="red";
//};

const newbutton=document.createElement("button");
newbutton.textContent="button5";
newbutton.classList="button";
document.body.appendChild(newbutton);

//let buttons=document.querySelectorAll(".button");
//buttons.forEach(button=>{
  //  button.addEventListener("click",Event=>{
    //    event.target.style.backgroundColor="black";
    //});
//});
let buttons=document.querySelectorAll(".button");

buttons.forEach(remove);
function remove(button){
 button.addEventListener("mouseover",rremove);
};
function rremove(event){
   event.target.style.visibility="hidden";
}

buttons.forEach(show);
function show(button){
    button.addEventListener("mouseout",showss)
};
function showss(event){
    event.target.style.visibility="visible";
}



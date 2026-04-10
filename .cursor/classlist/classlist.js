//const button=document.getElementById("buttons");

//button.classList.add("color")

//if(button.classList.contains("color")){
  //  button.classList.remove("color");
//}

//button.classList.toggle("addclass");

//button.classList.toggle("addclass");



const butt=document.querySelectorAll("button");

butt.forEach(button=>{
  button.addEventListener("click",event=>{
    event.target.classList.toggle("removeclass");

  })
});

//function add(button){
   // button.addEventlisner("click",addthis);
//};
//function addthis(event){
 //   event.target.classList.toggle("removeclass");
//
//};

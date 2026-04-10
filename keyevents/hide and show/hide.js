const img = document.getElementById("myimg");
const img2=document.getElementById("myimg2");
const button = document.getElementById("button");

function click() {
  if (img.style.visibility !== "hidden" ) {
    img.style.visibility = "hidden";
    button.textContent = "Show";
  } else {
    img.style.visibility = "visible";
    button.textContent = "hide";
  }
}

button.addEventListener("click", click);
function unclick(){
  if(img.style.visibility==="hidden"){
    img2.style.visibility="visible";
    button.textContent="showimg1";

  }else{
    img2.style.visibility="hidden";
    button.textContent="hide";
  }
}
button.addEventListener("click", unclick);

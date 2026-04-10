const sliders = document.querySelectorAll(".slider img");

let index = 0;
let internalid = null;

document.addEventListener("DOMContentLoaded", initializedslide);

function initializedslide() {
  if (sliders.length > 0) {
    sliders[index].classList.add("display");
    internalid = setInterval(next, 5000);
  }
}

function showslide(i){
  if (i >= sliders.length) {
    index = 0;
} else if (i< 0) {
   index = sliders.length - 1;
  } else {
    index=i;
  }

  sliders.forEach(img => img.classList.remove("display"));
  sliders[index].classList.add("display");
}

function prev() {
  clearInterval(internalid);
  showslide(index - 1); 
}

function next() {
  clearInterval(internalid);
  showslide(index + 1);
  internalid=setInterval(next,5000);
}
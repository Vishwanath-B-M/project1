const slider=document.querySelectorAll(".imgslider img");
let index=0;
let intervalid=null;

document.addEventListener("DOMContentLoaded",initializedslide);
function initializedslide(){
    if(slider.length>0){
        slider[index].classList.add("display");
        intervalid=setInterval(next,5000);
    }
}
function showslide(i){
    if(i<0){
        index=slider.length;
    }else if(i>=slider.length){
        index=0;

    }else{
        index=i;
    }
    slider.forEach(img=>img.classList.remove("display"));
    slider[index].classList.add("display");
}
function prev(){
    clearInterval(intervalid);
    index--;
    showslide(index);
}
function next(){
    clearInterval(intervalid);
    index++;
    showslide(index);
    intervalid=setInterval(next,5000);
}
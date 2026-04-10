const box1 = document.getElementById("box");
const movementAmount = 10;
let x = 0;
let y = 0;

function change(event) {
  if (event.key.startsWith("Arrow")) {

  switch (event.key) {
    case "ArrowUp":
      y -= movementAmount;
      break;
    case "ArrowDown":
      y += movementAmount;
      break;
    case "ArrowLeft":
      x -= movementAmount;
      break;
    case "ArrowRight":
      x += movementAmount;
      break;
    default:
      return;
  }
    box1.style.top = `${y}px`;
    box1.style.left = `${x}px`;
    box1.textContent='🤗';

}
};
function keyup(event){
  box1.textContent='❤️';
}

document.addEventListener("keydown", change);
document.addEventListener("keyup",keyup);

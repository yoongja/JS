
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const click = document.querySelector("h2");

function mouseEnter() {
  const enter = 1;
  superEventHandler(enter);
};

function mouseLeave() {
  const enter = 2;
  superEventHandler(enter);
};

function rightMouse() {
  const enter =3;
  superEventHandler(enter);
};

function resized() {
  const enter = 4;
  superEventHandler(enter);
};

function superEventHandler(event) {
    if(event===1){
      click.style.color = colors[0];
      click.innerText = "Mouse is here !";
    }
    else if(event===2){
      click.style.color = colors[1];
      click.innerText = "Mouse is gone !";
    }
    else if(event===3){
      click.style.color = colors[2];
      click.innerText = "That was a right click !";
    }
    else {
      click.style.color = colors[3];
      click.innerText = "You just resized !";
    }
};


click.addEventListener("mouseenter",mouseEnter);
click.addEventListener("mouseleave",mouseLeave);
click.addEventListener("contextmenu",rightMouse);
window.addEventListener("resize",resized);
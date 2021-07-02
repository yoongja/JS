const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
   title.style.color="blue";
}

function handleMouseEnter(){
    title.innerText="Mouse is here!";
}

function handleMouseLeave(){
    title.innerText="Mouse is gone!";
}

title.addEventListener("click",handleTitleClick); //event가 발생하면 호출할 function을 전달해줌
//()를 넣으면 안됨 js에 function만 넘겨주고 유저가 click할 경우에만 js가 실행버튼을 대신 눌러주기 위해서
//유저가 해당 event를 했을때 어떤 함수를 실행 할지도 정해야함

title.addEventListener("mouseenter",handleMouseEnter)
title.addEventListener("mouseleave",handleMouseLeave);
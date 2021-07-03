const h1 = document.querySelector("div.hello:first-child h1");

function handleWindowResize(){
    if(window.innerWidth>700){
        document.body.style.backgroundColor="tomato";
    }else if (window.innerWidth>500&&window.innerWidth<=700){
        document.body.style.backgroundColor="yellow";
    }else{
        document.body.style.backgroundColor="purple";
    }
    
}

window.addEventListener("resize",handleWindowResize);
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); //h1의 이름을 가져옴

const HIDDEN_CLASSNAME = "hidden";//string만 포함하는 변수는 대문자로 쓰기
const USERNAME_KEY = "userName";

function onLoginSubmit(event){
    event.preventDefault(); //브라우저가 먼저 실행됨을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);//앞쪽은 저장될 key요소의 이름, 뒤는 username변수 값
    paintGreetings(userName); //함수실행
}
  

function paintGreetings(userName){
    greeting.innerText = `Hello ${userName}`;  //백틱사용 // h1요소에 hello+username추가함
    greeting.classList.remove(HIDDEN_CLASSNAME); //h1에서 hidden class를 삭제하여 화면에 h1요소를 보여줌
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//프로그램이 실행되면 localstorage부터 확인함

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); //html loginform element에 접근하여 class이름에서 hidden을 제거하여 요소를 보여줌
    loginForm.addEventListener("submit", onLoginSubmit); //함수가 실행
  } else {
    paintGreetings(savedUsername);
  }
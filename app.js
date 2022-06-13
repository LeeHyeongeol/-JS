const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("input");

function onLoginSubmit(event) {
  //브라우저의 기본 동작을 막는다.
  event.preventDefault()
  console.log(event.value)
}

function handleButtonClick() {
  console.dir("hello " + loginInput.value)
  alert(loginInput.value)
  loginInput.value = ""

}
// onLoginSubmit() 이 있다면 submit event 발생 시 바로 함수를 실행시킨다.
loginForm.addEventListener("submit", onLoginSubmit)

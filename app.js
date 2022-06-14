const loginForm = document.querySelector("#login-form")
const buttonForm = document.querySelector("#login-form button")
const loginInput = document.querySelector("#login-form input")

function handleSubmit(e) {
  //브라우저의 기본 동작을 막아주는 역할
e.preventDefault();
console.log(e);
// const inputValue = loginInput.value
  // console.log(inputValue)
}
loginForm.addEventListener("submit", handleSubmit)


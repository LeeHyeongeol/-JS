const loginForm = document.querySelector("#login-form")
const buttonForm = document.querySelector("#login-form button")
const loginInput = document.querySelector("#login-form input")
const link = document.querySelector("a")
const greeting = document.querySelector("#greeting")

function handleSubmit(e) {
  //브라우저의 기본 동작을 막아주는 역할
  e.preventDefault();
  loginForm.classList.add("hidden")
  const username = loginInput.value
  localStorage.setItem("username", username)
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove("hidden")
  // const inputValue = loginInput.value
  // console.log(inputValue)
}

// function handleClick(e) {
//   //브라우저의 기본 동작을 막아줌
//   e.preventDefault()
//   const username = loginInput.value;
//   console.log(username)
//   greeting.innerText = `Hello ${username}`
//   greeting.classList.remove("hidden")
// }

loginForm.addEventListener("submit", handleSubmit)
// link.addEventListener("click", handleClick)


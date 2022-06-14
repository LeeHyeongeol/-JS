const loginForm = document.querySelector("#login-form")
const buttonForm = document.querySelector("#login-form button")
const loginInput = document.querySelector("#login-form input")

function handleSubmit(e) {
e.preventDefault()
console.log(e)
// const inputValue = loginInput.value
  // console.log(inputValue)
}
loginForm.addEventListener("submit", handleSubmit)


const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("input");
const loginButton = document.querySelector("button");

function ConditionButtonClick() {
  if (loginInput.value.length <= 15) {
    handleButtonClick()
  } else if (loginInput.value.length > 15) {
    alert("please write your username down shortly")
  } else {
    alert("please write your username right now!!!")
  }
  loginInput.value = ""
}

function handleButtonClick() {
  console.dir("hello " + loginInput.value)
  alert(loginInput.value)
  loginInput.value = ""

}

loginButton.addEventListener("click", ConditionButtonClick)

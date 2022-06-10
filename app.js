// const title = document.getElementById("title")
// const hellos = document.getElementsByClassName("hello")
const title1 = document.querySelector(".hello")
console.dir(title1)

function handleTitleClick() {
  console.log("title was clicked!")
  title1.style.color = "orange"
}
function handleMouseEnter() {
  title1.innerText = "mouse is here"
}
function handleMouseLeave() {
  title1.innerText = "mouse is gone!"
}
function handleWindowResize() {
  document.body.style.backgrondColor = "tomato"
  console.log("resize")
}
function handleWindowCopy() {
  alert("copier!!")
}
function handleWindowPaste() {
  alert("pasteㅠㅠ")
}
function handleWindowOffline() {
  alert("offLine")
}
function handleWindowOnline() {
  alert("gooooooooooooooooooood")
}
title1.addEventListener("click", handleTitleClick)
title1.addEventListener("mouseenter", handleMouseEnter)
title1.addEventListener("mouseleave", handleMouseLeave)
//javascipt에 function을 넘겨주기만 하고 유저가 클릭 시에 function이 실행되도록 한다.

window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("paste", handleWindowPaste)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)


//Javasciprt는 html element을 불러와서 읽고 변경할 수 있다.


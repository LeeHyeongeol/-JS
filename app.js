// const title = document.getElementById("title")
// const hellos = document.getElementsByClassName("hello")
const title1 = document.querySelector(".hello")
console.dir(title1)

function handleTitleClick() {
  // const clickedClass = "clicked"
  // if (title1.className === clickedClass) {
  //   title1.className = "";
  // } else {
  //   title1.className = clickedClass;
  // }
  // -----------------------------------------------
  // if (title1.classList.contains(clickedClass)) {
  //   title1.classList.remove(clickedClass)
  // } else {
  //   title1.classList.add(clickedClass)
  // }
  // ------------------------------------------------
  title1.classList.toggle("clicked")

}

title1.addEventListener("click", handleTitleClick)


//Javasciprt는 html element을 불러와서 읽고 변경할 수 있다.


const todoForm = document.getElementById("todo-form")
const toDoInput = todoForm.querySelector("input")
// const toDoInput = document.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list")
const ulist = document.getElementById("todo-list")

function paintTodo(newTodo) {
  console.log(`I will paint ${newTodo}`)
  const list = document.createElement("li")
  list.innerText = newTodo
  ulist.appendChild(list)

}
//todolist를 삭제하고 저장하는 방법까지 추가하면 되겠다.

function handleToDoSubmit(event) {
  event.preventDefault()
  // console.log(toDoInput.value)
  const newTodo = toDoInput.value
  //newTodo 변수는 toDoInput.value를 복사해온 것이기 때문에 toDoInput.value 값이 변경되어도 newToDo 변수 값은 변하지 않는다.
  toDoInput.value = ""
  // console.log('newTodo', newTodo, 'toDoInput.value', toDoInput.value)
  paintTodo(newTodo)
}

todoForm.addEventListener("submit", handleToDoSubmit)
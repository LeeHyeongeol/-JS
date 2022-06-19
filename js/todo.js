const todoForm = document.getElementById("todo-form")
const toDoInput = todoForm.querySelector("input")
// const toDoInput = document.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list")
const ulist = document.getElementById("todo-list")

let toDos = []
const TODOS_KEY = "todos"

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
  //로컬스토리지에 저장된 배열을 가져와서 렌더링 할 거기 때문에 js가 읽을 수 있도록
  // stiring에서 array 타입으로 변경 해 주어야 함
}

function paintTodo(newTodo) {
  console.log(`I will paint ${newTodo}`)
  const list = document.createElement("li")
  const span = document.createElement("span")
  const button = document.createElement("button")
  button.innerText = "💋"
  button.addEventListener("click", deleteliId)

  span.innerText = newTodo.text
  list.id = newTodo.id
  list.appendChild(span)
  list.appendChild(button)
  ulist.appendChild(list)

}
//todolist를 삭제하고 저장하는 방법까지 추가하면 되겠다.
// function handleButtonClick(e) {
//   // console.log(e.path[1])
//   console.log(e.target.parentNode)
//   const target = e.target.parentNode
//   target.remove()
//   deleteliId()
//   // const target = e.path[1]
//   // target.remove()
// }
//x를 눌렀을 때 타켓의 id를 얻어ㅗ자.
function deleteliId(e) {
  const li = e.target.parentElement
  li.remove()
  toDos = toDos.filter(item => { return item.id !== parseInt(li.id) })
  saveToDos()
}

function handleToDoSubmit(event) {
  event.preventDefault()
  // console.log(toDoInput.value)
  const newTodo = toDoInput.value
  console.log('newTodo', newTodo)
  //newTodo 변수는 toDoInput.value를 복사해온 것이기 때문에 toDoInput.value 값이 변경되어도 newToDo 변수 값은 변하지 않는다.
  toDoInput.value = ""
  const newTodoObj = {
    id: Date.now(),
    text: newTodo
  }
  // console.log('newTodo', newTodo, 'toDoInput.value', toDoInput.value)
  toDos.push(newTodoObj)
  console.log("toDos", toDos)
  paintTodo(newTodoObj)
  console.log("hello")
  saveToDos()
}

todoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)
if (saveToDos) {
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  //각각의 원소의 개수만큼 함수를 실행함.
  parsedToDos.forEach(paintTodo);
}

// paintTodo()

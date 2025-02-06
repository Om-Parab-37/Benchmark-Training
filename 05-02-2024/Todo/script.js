import {getAllTodos,deleteAllTodos,updateTodo,deleteTodo,addTodo} from './manageTodos.js'
document.addEventListener("DOMContentLoaded", () => {
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const ulTodo = document.getElementById("ul-todo");
  const btnCnfDelete = document.querySelector(".cnf-delete")
  const btnDeleteAll = document.querySelector(".btn-delete-all")

  let editMode = false;
  let deleteElement = null;

  const createTodo = (task) => {
    const li = document.createElement("li");
    li.id = task.id
    li.className =
      "list-group-item d-flex justify-content-between align-items-around";
    li.innerHTML = `<span class="text-todo">${task.title}</span>
    <input type="text" class="form-control d-none edit-todo" id="edit-todo" />
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-warning">edit</button>
      <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deletemodal">delete</button>
    </div>`;
    ulTodo.appendChild(li);
    
    
  };

  const loadAllTodo = async () => {
    const allTodos = await getAllTodos(7)
    allTodos.forEach((task) => createTodo(task));
  };

  const deleteAllTodo = async()=>{
    if(confirm("are you sure you want to delete all the tasks...?")){
    const res = await deleteAllTodos(ulTodo.children)
    ulTodo.replaceChildren()
    
    }
    }

  const updateTodoEl=async (e)=>{
    const li = e.target.closest(".list-group-item")
      const taskTextEl = li.querySelector(".text-todo")
      const EditTaskEl = li.querySelector(".edit-todo")
      const oldTaskText = taskTextEl.textContent;
      
      if (e.target.textContent == "edit") {
        
        taskTextEl.classList.add("d-none")
        EditTaskEl.classList.remove("d-none")
        EditTaskEl.value = oldTaskText
        EditTaskEl.focus()
        e.target.textContent = "update"  
      } else {
        const newTaskText = EditTaskEl.value
        EditTaskEl.classList.add("d-none")
        taskTextEl.classList.remove("d-none")
        taskTextEl.innerHTML = newTaskText
        e.target.textContent = "edit"
        const res = await updateTodo(li.id,oldTaskText,newTaskText)
        alert(res)
      }
  }

  const addNewTask=async()=>{
    const text = inputTodo.value;
    const numberOfTasks = ulTodo.children.length
    if(!text){
      return
    }
    if (editMode) {
      editElement.querySelector(".text-todo").textContent = text;
      editMode = false;
      editElement = null;
      buttonTodo.textContent = "Add";
    } else {
      createTodo({id:numberOfTasks,title:text});
      const res = await addTodo(text)
      alert(res)
    }
    inputTodo.value = "";
  }

  btnDeleteAll.addEventListener("click",deleteAllTodo)
  buttonTodo.addEventListener("click",addNewTask);
  btnCnfDelete.addEventListener("click",async ()=>{
    deleteElement.remove();
    const res = await deleteTodo()
    alert(res)
  })
  ulTodo.addEventListener("click", (e) => {
    
    if (e.target.classList.contains("btn-danger")) {
    deleteElement = e.target.closest(".list-group-item")
    }

    if (e.target.classList.contains("btn-warning")) {
      updateTodoEl(e)
    }
  });

  loadAllTodo();
});

document.addEventListener("DOMContentLoaded", () => {
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const ulTodo = document.getElementById("ul-todo");

  let editMode = false;
  //let editElement = null;

  buttonTodo.addEventListener("click", () => {
    const text = inputTodo.value;
    if (editMode) {
      editElement.querySelector(".text-todo").textContent = text;
      editMode = false;
      editElement = null;
      buttonTodo.textContent = "Add";
    } else {
      createTodo(text);
    }
    inputTodo.value = "";
    saveAllTodo();
  });

  const createTodo = (task) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-around";
    li.innerHTML = `<span class="text-todo">${task}</span>
    <input type="text" class="form-control d-none edit-todo" id="edit-todo" />
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-warning">edit</button>
      <button type="button" class="btn btn-danger">delete</button>
    </div>`;
    ulTodo.appendChild(li);
  };

  ulTodo.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-danger")) {
      e.target.closest(".list-group-item").remove();
      saveAllTodo();
    }

    if (e.target.classList.contains("btn-warning")) {
      const li = e.target.closest(".list-group-item")
      const taskTextEl = li.querySelector(".text-todo")
      const EditTaskEl = li.querySelector(".edit-todo")
      
      if (e.target.textContent == "edit") {
        const taskText = taskTextEl.textContent;
        taskTextEl.classList.add("d-none")
        EditTaskEl.classList.remove("d-none")
        EditTaskEl.value = taskText
        EditTaskEl.focus()
        e.target.textContent = "update"  
      } else {
        const taskText = EditTaskEl.value
        EditTaskEl.classList.add("d-none")
        taskTextEl.classList.remove("d-none")
        taskTextEl.innerHTML = taskText
        e.target.textContent = "edit"
        
      }
    }
  });

  const saveAllTodo = () => {
    const allTodos = [...document.querySelectorAll(".text-todo")].map(
      (task) => task.textContent
    );

    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  };

  const loadAllTodo = () => {
    const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
    allTodos.forEach((task) => createTodo(task));
  };

  loadAllTodo();
});

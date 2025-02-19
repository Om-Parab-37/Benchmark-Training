
const tasksLocalStorageKey = import.meta.env.VITE_TASKS_LOCALSTORAGE_KEY;


export const fetchTasksFromLocalStorage:()=>string[]= () =>{
    const tasks = localStorage.getItem(tasksLocalStorageKey)
    return tasks ? JSON.parse(tasks) : []
}

export const addTaskToLocalStorage=(task:string)=>{
    const allTasks = fetchTasksFromLocalStorage()
    localStorage.setItem(tasksLocalStorageKey,JSON.stringify([...allTasks,task]))
}
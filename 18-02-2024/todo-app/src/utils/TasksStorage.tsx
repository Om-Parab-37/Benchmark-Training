export interface ITaskStorage{
    tasks:Task[]
}

export type Task={
    id:number
    title:string
}


const tasksLocalStorageKey = import.meta.env.VITE_TASKS_LOCALSTORAGE_KEY;


export const fetchTasksFromLocalStorage:()=>Task[]= () =>{
    const tasks = localStorage.getItem(tasksLocalStorageKey)
    return tasks ? [...JSON.parse(tasks).tasks] : []
}

export const addTaskToLocalStorage=(task:string)=>{
    const allTasks = [...fetchTasksFromLocalStorage()]
    localStorage.setItem(tasksLocalStorageKey,JSON.stringify({tasks:[...allTasks,{id:allTasks.length,title:task}]}))
}

export const deleteTaskFromLocalStorage=(id:number)=>{
    const allTasks = [...fetchTasksFromLocalStorage()]
    localStorage.setItem(tasksLocalStorageKey,JSON.stringify({tasks:allTasks.filter(task=>task.id!=id)}))

}

export const editTaskInLocalStorage=(id:number,newTaskTitle:string)=>{
    const allTasks = [...fetchTasksFromLocalStorage()]
    const newTasks = allTasks.map(task=>task.id===id ? {id:task.id, title: newTaskTitle}:task)
    localStorage.setItem(tasksLocalStorageKey,JSON.stringify({tasks:newTasks}))
}
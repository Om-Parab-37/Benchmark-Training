import { createContext } from "react"

export interface ITaskStorage{
    tasks:Task[]
}

export type Task={
    id:number
    title:string
    done:boolean
}

export const TasksContext = createContext([]);

const tasksLocalStorageKey = import.meta.env.VITE_TASKS_LOCALSTORAGE_KEY;

export const taskReducer=(state,action)=>{
    switch (action.type){
        case "ADD_TASK":{
            console.log("Task Added")}
            return [...state,action.payload.task]
        case "REMOVE_TASK":{
            console.log("Task Removed")   
            return state.filter((task:Task)=> task.id!=action.payload.id).map((task:Task,idx:number)=>{return {id:idx,title:task.title,done:task.done}})
    }
        case "EDIT_TASK":{
            console.log("Task Toggled")
            return state.map((task:Task)=>task.id===action.payload.task.id?action.payload.task:task)
            }        
        default:
            break;
    }
}




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
    localStorage.setItem(tasksLocalStorageKey,JSON.stringify({tasks:allTasks.filter(task=>task.id!=id).map((task,idx)=>{return {id:idx,title:task.title}})}))

}

export const editTaskInLocalStorage=(id:number,newTaskTitle:string)=>{
    const allTasks = [...fetchTasksFromLocalStorage()]
    const newTasks = allTasks.map(task=>task.id===id ? {id:task.id, title: newTaskTitle}:task)
    localStorage.setItem(tasksLocalStorageKey,JSON.stringify({tasks:newTasks}))
}
import { useState } from "react"
import { addTaskToLocalStorage } from "../utils/TasksStorage";

type TTaskInputProps={
  handleTasks:()=>void
}

const TaskInput = ({handleTasks}:TTaskInputProps) => {
  const [task,setTask] = useState("")


  return (
    <>
    <input type="text" value={task} onChange={(e)=>{ setTask(e.target.value)}} placeholder="Enter new Task"/>
    <button onClick={()=>{addTaskToLocalStorage(task); handleTasks()}}>Add Task</button>
    </> 
  )
}
export default TaskInput
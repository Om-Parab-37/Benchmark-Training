import { useState } from "react"
import { deleteTaskFromLocalStorage, editTaskInLocalStorage, Task } from "../utils/TasksStorage"

type TProps = {
    task : Task
    handleTasks:()=>void
}

const TaskListItem = ({task,handleTasks}: TProps) => {
    const [isEditing,setIsEditing] = useState(false)
    const [taskText,setTaskText] = useState(task.title)
  return (
    <>
    {isEditing ?
    <> 
    <input type="text" value={taskText} onChange={(e)=>setTaskText(e.target.value)}/>
    <button onClick={()=>{editTaskInLocalStorage(task.id,taskText); handleTasks();setIsEditing(false)}}>Save Changes</button>
    </>
    :<>
    <div>{taskText}</div>
    <button onClick={()=>setIsEditing(true)}>Edit</button>
    <button onClick={()=>{deleteTaskFromLocalStorage(task.id); handleTasks()}}>Delete</button>
    </>
    }
    </>
  )
}

export default TaskListItem
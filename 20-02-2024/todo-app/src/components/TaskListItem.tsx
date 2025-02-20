import { useContext, useReducer, useState } from "react"
import { deleteTaskFromLocalStorage, editTaskInLocalStorage, Task, taskReducer, TasksContext } from "../utils/TasksStorage"

type TProps = {
    task : Task
}

const TaskListItem = ({task}: TProps) => {
    const [isEditing,setIsEditing] = useState(false)
    const [taskText,setTaskText] = useState(task.title)
    const {tasks , dispatch} = useContext(TasksContext)
  return (
    <>
    {isEditing ?
    <>  
    <input type="text" value={taskText} onChange={(e)=>setTaskText(e.target.value)}/>
    <button onClick={()=>{dispatch({type:"EDIT_TASK",payload:{task:{...task,title:taskText}}});setIsEditing(false)}}>Save Changes</button>
    </>
    :<>
    <div>{taskText}</div>
    <button onClick={()=>setIsEditing(true)}>Edit</button>
    {/* <button onClick={()=>{dispatch({type:"DELETE_TASK",payload:{id:task.id}})}}>Delete</button> */}
    </>
    }
    </>
  )
}

export default TaskListItem
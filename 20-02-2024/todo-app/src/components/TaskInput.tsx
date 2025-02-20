import { useContext,useState } from "react"
import { TasksContext } from "../utils/TasksStorage";



const TaskInput = () => {
  const [task,setTask] = useState("")
  const {tasks,dispatch} = useContext(TasksContext)


  return (
    <>
    <input type="text" value={task} onChange={(e)=>{ setTask(e.target.value)}} placeholder="Enter new Task"/>
    <button onClick={()=>{dispatch({type:"ADD_TASK",payload:{task:{id:tasks.length+1,title:task,done:false}}})}}>Add Task</button>
    </> 
  )
}
export default TaskInput
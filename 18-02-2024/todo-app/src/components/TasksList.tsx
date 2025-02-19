import { Task } from "../utils/TasksStorage"
import TaskListItem from "./TaskListItem"

type TProps = {
    allTasks: Task[]
    handleTasks:()=>void
    
}

const TasksList = ({allTasks,handleTasks}:TProps) => {
  return (
    <>
    <h3>Tasks list</h3>
    <>
    {
        allTasks.map((task:Task)=>(
            <TaskListItem key={task.id} task={task} handleTasks={handleTasks}/>
        ))
    }
    </>

    </>
  )
}

export default TasksList
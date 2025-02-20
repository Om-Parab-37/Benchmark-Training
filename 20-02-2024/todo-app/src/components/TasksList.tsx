import { useContext } from "react"
import { Task, TasksContext } from "../utils/TasksStorage"
import TaskListItem from "./TaskListItem"

const TasksList = () => {

  const {tasks,dispatch} = useContext(TasksContext)

  return (
    <>
    <h3>Tasks list</h3>
    <>
    {
        tasks.map((task:Task)=>(
            <TaskListItem key={task.id} task={task}/>
        ))
    }
    </>

    </>
  )
}

export default TasksList
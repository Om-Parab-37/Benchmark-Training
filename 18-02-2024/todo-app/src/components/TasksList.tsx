import TaskListItem from "./TaskListItem"

type TProps = {
    allTasks: string[]
    
}

const TasksList = ({allTasks}:TProps) => {
    console.log(allTasks)
  return (
    <>
    <h3>Tasks list</h3>
    <>
    {
        allTasks.map((task:string)=>(
            <TaskListItem task={task} />
        ))
    }
    </>

    </>
  )
}

export default TasksList
import TaskInput from "../components/TaskInput"
import TasksList from "../components/TasksList"
import TasksProvider from "../components/TasksProvider"


const HomePage = () => {
      //const [tasks,setTasks] = useState<Task[]>(fetchTasksFromLocalStorage())
    
    
  return (
  <TasksProvider>
    <div className="p-5">
     <TaskInput />
     <TasksList />
     </div>
  </TasksProvider>
  )
}

export default HomePage
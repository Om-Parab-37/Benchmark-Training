import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TasksList from "./components/TasksList";
import { fetchTasksFromLocalStorage, Task } from "./utils/TasksStorage";

export default function App () {

  const [tasks,setTasks] = useState<Task[]>(fetchTasksFromLocalStorage())

  const handleTasks = ()=> {
    setTasks(fetchTasksFromLocalStorage())
  }

  
  return (
    <>
     <TaskInput handleTasks={handleTasks}/>
     <TasksList allTasks={tasks} handleTasks={handleTasks} />
    </>
  );
}













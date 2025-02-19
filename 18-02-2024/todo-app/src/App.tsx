import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TasksList from "./components/TasksList";
import { fetchTasksFromLocalStorage } from "./utils/TasksStorage";

export default function App () {

  const [tasks,setTasks] = useState<string[]>(fetchTasksFromLocalStorage())

  const handleTasks = ()=> {
    setTasks(fetchTasksFromLocalStorage())
  }

  
  return (
    <>
     <TaskInput handleTasks={handleTasks}/>
     <TasksList allTasks={tasks} />
    </>
  );
}













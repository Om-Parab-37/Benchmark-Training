import { useReducer } from "react";
import {taskReducer, TasksContext } from "../utils/TasksStorage";

const TasksProvider = ({children}) => {
    const [tasks,dispatch] = useReducer(taskReducer,[])
  return (
    <TasksContext.Provider value={{tasks,dispatch}}>
        {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider
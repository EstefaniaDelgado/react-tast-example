import {createContext, useState, useEffect} from 'react';
import { tasks as data } from '../data/task';

export const TaskContext = createContext();

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);

   //funcion creadora de tareas:
   function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
    console.log(task);
  };

  //eleminar tarea
  function deleteTask(taskId){
    // console.log(tasks)
    // console.log(taskId)
    setTasks(tasks.filter(task=>task.id !== taskId))
    console.log(tasks) 
  };

  useEffect(() => {
    setTasks(data);
  }, []);


  return (
   <TaskContext.Provider value={{
   tasks, 
   createTask, 
   deleteTask
    }}>
    {props.children}
   </TaskContext.Provider>
  )
}


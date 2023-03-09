import { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';
import TaskCard from './TaskCard';

export default function TaskList() {

  const {tasks}=useContext(TaskContext)
  
  if (tasks.length === 0) {
    return<h1 className='text-white text-4xl font-bold text-center'>No hay tareas aun</h1>;
  }
  
  return (
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map((task, index) => (
        /* aqui si le paso las task porque el TaskList las esta recorriendo */
        <TaskCard key={index} task={task}  />
      ))}
    </div>
  );
}

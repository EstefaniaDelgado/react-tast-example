import { useContext, useState } from 'react';
import { TaskContext } from '../Context/TaskContext';

export default function TaskForm() {
  //traigo el contexto:
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState('');
  const [description, setDescripcion] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle('');
    setDescripcion('');
  };

  return (
    <div className="max-w-md mx-auto p-5">
      <form onSubmit={handlerSubmit} className="bg-slate-900 p-10 mb-4">
        <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
        <input
          type="text"
          placeholder="🖍 Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className='bg-slate-300 p-3 w-full mb-2'
        />
        <br />
        <textarea
          placeholder="Descripcion de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          value={description}
          className='bg-slate-300 p-3 w-full mb-2'
        ></textarea>
        <button className='bg-indigo-500 px-3 py-1 text-white rounded-md'>Guardar</button>
      </form>
    </div>
  );
}

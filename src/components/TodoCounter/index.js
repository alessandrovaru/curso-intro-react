import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

const TodoCounter = () => {
  const {totalTodos, completedTodos} = useContext(TodoContext);
  return (
    <div className='todoCounterContainer'>
      <h1 className='todoTitle'>Haz tus tareas, por favor</h1>
      <h2 className='todoCounter'>Has completado {completedTodos} de {totalTodos} Todo's</h2>
    </div>
  )
}

export { TodoCounter }
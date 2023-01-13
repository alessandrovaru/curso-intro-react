import './TodoCounter.css';

const TodoCounter = ({total, completed}) => {
  
  return (
    <div className='todoCounterContainer'>
      <h1 className='todoTitle'>Haz tus tareas, por favor</h1>
      <h2 className='todoCounter'>Has completado {completed} de {total} Todo's</h2>
    </div>
  )
}

export { TodoCounter }
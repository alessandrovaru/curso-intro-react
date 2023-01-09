import './TodoCounter.css';

const TodoCounter = () => {
  return (
    <div className='todoCounterContainer'>
      <h1 className='todoTitle'>Haz tus tareas, por favor</h1>
      <h2 className='todoCounter'>Has completado 2 de 3 Todo's</h2>
    </div>
  )
}

export { TodoCounter }
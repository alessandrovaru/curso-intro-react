
import './TodoCounter.css';

const TodoCounter = ({totalTodos, completedTodos, loading}) => {
  return (
    <div className={`todoCounterContainer ${!!loading && "todoCounterContainer--loading"}`}>
      <h1 className='todoTitle'>Haz tus tareas, por favor</h1>
      <h2 className='todoCounter'>Has completado {completedTodos} de {totalTodos} Todo's</h2>
    </div>
  )
}

export { TodoCounter }
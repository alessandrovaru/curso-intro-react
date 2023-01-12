import './TodoItem.css';

const TodoItem = (props) => {
  const onComplete = () => {
    alert('Ya completaste el task ' + props.text)
  }
  const onDelete = () => {
    alert('Borraste el task ' + props.text)
  }
  return (
    <>
      <div key={props.key} className="TodoItem">
        <span>ToDo</span>
        <p className={`${props.completed && 'checked'}`}>{props.text}</p>  
        <span 
          className={`completed ${props.completed && 'unclickable'}`}
          onClick={onComplete}
        >
          completar
        </span>
        <span 
          className='delete'
          onClick={onDelete}
        >
          Borrar
        </span>
      </div> 
    </>
  )
}

export { TodoItem }
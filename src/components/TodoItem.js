import './TodoItem.css';

const TodoItem = (props) => {
  return (
    <>
      <div className="TodoItem">
        <span>ToDo</span>
        <p className={`${props.completed && 'checked'}`}>{props.text}</p>  
        <span 
          className={`completed ${props.completed && 'unclickable'}`}
          onClick={props.onComplete}
        >
          completar
        </span>
        <span 
          className='delete'
          onClick={props.onDelete}
        >
          Borrar
        </span>
      </div> 
    </>
  )
}

export { TodoItem }
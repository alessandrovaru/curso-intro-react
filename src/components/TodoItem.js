import './TodoItem.css';

const TodoItem = (props) => {
  return (
    <>
      <div className="TodoItem">{props.text}</div> 
    </>
  )
}

export { TodoItem }
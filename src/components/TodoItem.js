import './TodoItem.css';

const TodoItem = (props) => {
  return (
    <>
      <li>{props.text}</li> 
    </>
  )
}

export { TodoItem }
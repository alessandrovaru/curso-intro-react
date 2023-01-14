import './TodoList.css'

const TodoList = (props) => {
  return (
    <>
      <h3>Lista</h3>
      <div className='TodoList'>
        {props.children}
      </div>
    </>
  )
}

export { TodoList }
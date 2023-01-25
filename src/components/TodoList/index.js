import './TodoList.css'

const TodoList = (props) => {
  return (
    <>
      <h3>Lista</h3>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      
      {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
      
      <div className='TodoList'>
        {props.searchedTodos.map(todo => props.render(todo))}
      </div>
    </>
  )
}

export { TodoList }
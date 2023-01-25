import './TodoList.css'

const TodoList = (props) => {
  const renderFunc = props.children || props.render
  return (
    <>
      <h3>Lista</h3>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchText)}
      
      <div className='TodoList'>
        {props.searchedTodos.map(todo => 
          <>
            {renderFunc(todo)}
          </>
        )}
      </div>
    </>
  )
}

export { TodoList }
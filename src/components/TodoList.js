
const TodoList = (props) => {
  return (
    <>
      <h3>Lista</h3>
      <ul>
        {props.children}
      </ul>
    </>
  )
}

export { TodoList }
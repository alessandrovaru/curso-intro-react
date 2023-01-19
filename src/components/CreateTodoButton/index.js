import './CreateTodoButton.css'

const CreateTodoButton = (props) => {
  return (
    <>
      <button 
        className='CreateTodoButton'
        onClick={props.setOpenModal}>
        +
      </button>
    </>
  )
}

export { CreateTodoButton }
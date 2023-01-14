import './CreateTodoButton.css'

const CreateTodoButton = () => {
  const onClickButton = (msg) => {
    alert(msg)
  }

  return (
    <>
      <button 
        className='CreateTodoButton'
        onClick={()=> onClickButton('Estamos en el modal')}>
          +
        </button>
    </>
  )
}

export { CreateTodoButton }
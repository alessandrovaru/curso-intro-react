import './TodoSearch.css'
const TodoSearch = () => {
  const onSearchValueSearch = (event) => {
    console.log(event.target.value)
  }
  return (
    <>
      <h3 className='todoDoSearchTitle'>Buscar un ToDo</h3>
      <input 
        className='todoDoSearch' 
        placeholder="Cebolla" 
        onChange={onSearchValueSearch}
      />
    </>
  )
}

export { TodoSearch }
import './TodoSearch.css'

const TodoSearch = ({searchValue, setSearchValue}) => {
  const onSearchValueSearch = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <>
      <h3 className='todoDoSearchTitle'>Buscar un ToDo</h3>
      <input 
        className='todoDoSearch' 
        placeholder="Cebolla" 
        value={searchValue}
        onChange={onSearchValueSearch}
      />
    </>
  )
}

export { TodoSearch }
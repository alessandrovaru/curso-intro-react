import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

const TodoSearch = () => {
  const {searchValue, setSearchValue} = useContext(TodoContext)
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
import React, { useContext } from 'react'
import { useState } from 'react';
import { TodoContext } from '../TodoContext';

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('');
  const {addTodo, setOpenModal} = useContext(TodoContext);

  const onChange = (e)=>{
    setNewTodoValue(e.target.value);
  };
  const onCancel = ()=>{
    setOpenModal(false);
  };
  const onSubmit= (e)=>{
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder='Cortar la cebolla'></textarea>
      <div>
        <button type='button' onClick={onCancel}>
          Cancelar
        </button>
        <button type='submit' >
          Guardar
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
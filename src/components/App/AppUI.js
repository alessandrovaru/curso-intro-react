import React from 'react';
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { CreateTodoButton } from "../../components/CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';

function AppUI() {

  //CONTEXT
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue
  } = React.useContext(TodoContext)
  
  return (
    <React.Fragment>
      
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos} 
          completedTodos={completedTodos} 
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue} 
        />
      </TodoHeader>
      {!!openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm />
        </Modal>
      )}
        <TodoList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
          
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
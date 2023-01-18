import React from 'react';
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { CreateTodoButton } from "../../components/CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";

function AppUI() {

  //CONTEXT
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo
  } = React.useContext(TodoContext)
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <Modal>
          Teleportasddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          Teleportasddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          Teleportasddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          Teleportasddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          Teleportasddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          Teleportasddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          Teleportasddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          Teleportasddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </Modal>
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
        
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
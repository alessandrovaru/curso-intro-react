import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { CreateTodoButton } from "../../components/CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import './App.css'



function App() {
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
      setSearchValue,
      addTodo
    } = useTodos()
  return (
      <div className='App'>
        <div className='App-inner'>
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
              <TodoForm
                setSearchValue={setSearchValue}
                addTodo={addTodo}
              />
            </Modal>
          )}

          <TodoList
            error={error}
            loading={loading}
            totalTodos={totalTodos}
            searchedTodos={searchedTodos}
            searchText={searchValue}
            onError={()=> <p>Desespérate, hubo un error...</p>}
            onLoading={()=><p>Estamos cargando, no desesperes...</p>}
            onEmptyTodos={()=><p>¡Crea tu primer TODO!</p>}
            onEmptySearchResult={
              (searchText)=><p>No hay resulatdo para {searchText}</p>
            }
            render={todo=>(
              <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
            )}
          >

          </TodoList>
           
            
          <CreateTodoButton setOpenModal={setOpenModal} />
        </div>
      </div>
  );
}

export default App;
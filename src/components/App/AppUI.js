import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { CreateTodoButton } from "../../components/CreateTodoButton";

const AppUI = ({
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        filteredTodo,
        completeTodo,
        deleteTodo,
        setTodos}) => {
  return (
    <div className="App">
      <div className="App-inner">
        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {error && <p>Hubo un error</p>}
          {loading && <p>Estamos cargando, no la pierdas</p>}
          {!loading && !filteredTodo.length && <p>Crea tu primer To Do</p>}
          {filteredTodo.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton
          setTodos={setTodos}
        />
      </div>
    </div>
  )
}

export { AppUI }
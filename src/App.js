import './App.css';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { useEffect, useState } from 'react';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Cortar papas', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Llorar con la lloronad', completed: false },
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  useEffect(() => {
    if (searchValue) {
      const filteredTodo = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
      console.log(filteredTodo);
      setTodos(filteredTodo)
    }
    if (searchValue.length === 0) {
      setTodos(defaultTodos)
    }
  }, [searchValue, todos])
  

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
          {todos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Cortar papas', completed: true },
  { text: 'Llorar con la llorona', completed: false },
]

function App() {
  return (
    <div className="App">
      <div className="App-inner">
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;

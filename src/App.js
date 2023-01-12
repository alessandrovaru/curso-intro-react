import './App.css';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Cortar papas', completed: false },
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
            <TodoItem text={todo.text} />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;

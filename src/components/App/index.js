import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import './App.css'


function App() {
  return (
    <TodoProvider >
      <div className='App'>
        <div className='App-inner'>
          <AppUI />
        </div>
      </div>
      
    </TodoProvider>
    
  );
}

export default App;
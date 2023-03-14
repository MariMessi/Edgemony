import { useState } from 'react';
import TodoForm from './components/todoForm';
import List from './components/list';
import todos from './mocks/todos';
import './App.css'

function App() {
const [todoValue, setTodoValue] = useState(todos);

  return (
    <div className="App">

      <TodoForm setTodo={setTodoValue}/>
      <List todo={todoValue} setTodo={setTodoValue} />
    </div>
  )
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Title } from "./components/Title";
import { InputFrom } from "./components/InputFrom";
import { TodoList } from "./components/TodoList"
import { useState } from 'react';
  
function App() {
  
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <Title />
      <InputFrom taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
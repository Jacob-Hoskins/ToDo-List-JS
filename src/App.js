import './index.css'
import Todo from './components/Todo';
import CreateTask from './components/addTask/CreateTask';
import TaskModal from './components/addTask/TaskModal';


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <CreateTask />
      <Todo text="Learn React"/>
      <Todo text='Master react'/>
      
    </div>
  );
}

export default App;

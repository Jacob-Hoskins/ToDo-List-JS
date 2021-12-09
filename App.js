import './index.css'
import Todo from './components/Todo';
import CreateTask from './components/addTask/CreateTask';


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <CreateTask />
      <Todo text="Learn React"/>
      <Todo text='Master React' />
      
    </div>
  );
}

export default App;

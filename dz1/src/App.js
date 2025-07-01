import './App.css';
import AddTask from './components/AddTask';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <TasksList/>
    </div>
  );
}

export default App;

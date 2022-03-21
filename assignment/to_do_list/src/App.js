import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App container">
    <div class="window">
      <div class="title-bar">
        <div class="title-bar-text" style={{margin: "10px auto"}}><h4>To Do List</h4></div>
      </div>
      <div class="window-body">
        <ToDoList></ToDoList>
      </div>
    </div>
  </div>
  );
}

export default App;
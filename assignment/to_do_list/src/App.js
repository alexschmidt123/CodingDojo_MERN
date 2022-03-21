import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App container">
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text" style={{margin: "10px auto"}}><h4>To Do List</h4></div>
      </div>
      <div className="window-body">
        <ToDoList></ToDoList>
      </div>
    </div>
  </div>
  );
}

export default App;
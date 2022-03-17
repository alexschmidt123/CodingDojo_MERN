import './App.css';
import Box from './components/Box';

function App() {
  return (
    <div className="App container">
    <div class="window">
      <div class="title-bar">
        <div class="title-bar-text" style={{margin: "10px auto"}}><h4>Add Boxs Below !!!</h4></div>
      </div>
      <div class="window-body">
        <Box></Box>
      </div>
    </div>
  </div>
  );
}

export default App;
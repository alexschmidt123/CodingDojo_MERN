import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (

    <div className="App container">
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-text">More Forms</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body">
          <UserForm></UserForm>
        </div>
      </div>
    </div>

  );
}

export default App;

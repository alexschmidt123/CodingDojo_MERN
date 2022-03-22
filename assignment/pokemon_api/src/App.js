import './App.css';
import PokemonAPI from './components/PokemonAPI'; 
import AxiosPokemonAPI from './components/AxiosPokemonAPI'; 


function App() {
  return (
    <div className="App">
      <h1>APIs Assignments</h1>
      <PokemonAPI></PokemonAPI>
      {/* <AxiosPokemonAPI> </AxiosPokemonAPI> */}


    </div>
  );
}

export default App;

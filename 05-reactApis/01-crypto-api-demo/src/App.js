import logo from './logo.svg';
import './App.css';
import CoinGenerator from './components/CoinGenerator'; //this is the example with fetch()
import CoinGeneratorWithAxios from './components/CoinGeneratorWithAxios'; //this is the example with axios()
import CoinGeneratorWithAxiosAndUseEffect from './components/CoinGeneratorWithAxiosAndUseEffect'; //this is the example with axios and useEffect


function App() {
  return (
    <div className="App">
      <h1>Crypto Coin Viewer</h1>
      {/* <CoinGenerator></CoinGenerator> */}
      {/* <CoinGeneratorWithAxios></CoinGeneratorWithAxios> */}
      <CoinGeneratorWithAxiosAndUseEffect/>


    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem'

function App() {
  return (
    <div className="App">
      <MenuItem dishName= {"Calamari"} price = {12.99} likes = {5} ></MenuItem>
      <MenuItem dishName= {"Burrito"} price = {9.99} likes = {2} ></MenuItem>
      <MenuItem dishName= {"Greek Salad"} price = {14.99} likes = {5} ></MenuItem>
      <MenuItem dishName= {"Wings"} price = {5.99} likes = {15} ></MenuItem>

      

    </div>
  );
}

export default App;

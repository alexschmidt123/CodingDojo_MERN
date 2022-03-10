import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem';

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner Menu</h1>
      <MenuItem dishName = {"Fish Tacos"} price = {5.00} likes = {3}  ></MenuItem>
      <MenuItem dishName = {"Tamales"} price = {15.00} likes = {20}></MenuItem>
      <MenuItem dishName = {"Greek Salad"} price = {10.00} likes = {5}></MenuItem>


      

    </div>
  );
}

export default App;

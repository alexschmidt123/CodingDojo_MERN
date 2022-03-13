import './App.css';
import Person_card from './components/Person_card'

function App() {
  return (
    <div className="App">
      <Person_card fullname= {"Deo, Jane"} age = {45} color = {"Black"} ></Person_card>
      <Person_card fullname= {"Smith, John"} age = {88} color = {"Brown"} ></Person_card>
      <Person_card fullname= {"Fillmore, Millard"} age = {50} color = {"Brown"} ></Person_card>
      <Person_card fullname= {"Smith, Maria"} age = {62} color = {"Brown"} ></Person_card>
    </div>
  );
}

export default App;
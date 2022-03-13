import './App.css';
import PersonCard from './components/Person_card'

function App() {
  return (
    <div className="App">
      <PersonCard fullname= {"Deo, Jane"} age = {45} color = {"Black"} ></PersonCard>
      <PersonCard fullname= {"Smith, John"} age = {88} color = {"Brown"} ></PersonCard>
      <PersonCard fullname= {"Fillmore, Millard"} age = {50} color = {"Brown"} ></PersonCard>
      <PersonCard fullname= {"Smith, Maria"} age = {62} color = {"Brown"} ></PersonCard>
    </div>
  );
}

export default App;
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard lastname= {"Deo"} firstname ={"Jane"} age = {45} color = {"Black"} ></PersonCard>
      <PersonCard lastname= {"Smith"} firstname ={"John"} age = {88} color = {"Brown"} ></PersonCard>
      <PersonCard lastname= {"Fillmore"} firstname ={"Millard"} age = {50} color = {"Brown"} ></PersonCard>
      <PersonCard lastname= {"Smith"} firstname ={"Maria"} age = {62} color = {"Brown"} ></PersonCard>
    </div>
  );
}

export default App;
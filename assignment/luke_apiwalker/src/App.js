import './App.css';
import SearchForm from './components/SearchForm';
import Details from './components/Details';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App container w-75 p-3">
        <h1>Luke Api Walker Form</h1>
        <hr/>
        <SearchForm></SearchForm>
        <Switch>
          <Route exact path ="/:categories/:id/">
            <Details></Details>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
      
  );
}

export default App;

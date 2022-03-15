import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, //this allows us to enable routing for the application
  Switch, //this allows us to tell react which components/elements will show conditionally based on the route
  Route, //this allows us to specify the route for a component/element
  Link //just like an anchor tag but it will not reload the whole page
} from "react-router-dom";

import Profile from './components/Profile';
import People from './components/People';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to Routing Demo</h1>
        <Link to="/">Home</Link> || <Link to="/profile">View My Profile</Link>
        <Switch>
          <Route exact path = "/">
            <p>This is the home page</p>
          </Route>
          <Route exact path = "/profile">
            <Profile></Profile>
          </Route>
          <Route exact path = "/people/:id/">
            <People></People>
          </Route>

          <Route exact path = "/people/:id/:borderColor">
            <People></People>
          </Route>
          

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

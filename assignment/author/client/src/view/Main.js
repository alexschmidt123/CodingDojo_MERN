import React, { useState } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import AuthorForm from '../components/AuthorForm';
import AuthorShow from '../components/AuthorShow';
import EditOneAuthor from '../components/EditOneAuthor';

const Main = () => {
    let [formSubmitted, setFormSubmitted] = useState(false);
    return (
        <BrowserRouter>
            <div className="App container">
                <h1>Favorite authors</h1>
                <Switch>
                    <Route exact path="/">
                        <Link to="/new" >Add an author</Link>
                        <p>We have quotes by:</p>
                        <AuthorShow formSubmitted={formSubmitted}></AuthorShow>
                    </Route>
                    <Route exact path="/new">
                        <Link to="/" >Home</Link>
                        <p>Add a new author</p>
                        <AuthorForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></AuthorForm>
                    </Route>
                    <Route exact path="/edit/:_id">
                        <Link to="/" >Home</Link>
                        <p>Edit this author</p>
                        <EditOneAuthor></EditOneAuthor>
                    </Route>



                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default Main;
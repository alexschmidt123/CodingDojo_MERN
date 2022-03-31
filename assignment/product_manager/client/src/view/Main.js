import React, { useState } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ProductForm from '../components/ProductForm';
import ProductShow from '../components/ProductShow';
import OneProductDetail from '../components/OneProductDetail';
import EditOneProduct from '../components/EditOneProduct';

const Main = () => {
    let [formSubmitted, setFormSubmitted] = useState(false);
    return (
        <BrowserRouter>
            <div className="App container">
                <h1>Product Manager Interface</h1>
                <Link to="/" className="btn btn-info m-1">Home</Link>
                <Link to="/new" className="btn btn-secondary m-1">Create a product</Link>
                <Switch>
                    <Route exact path="/">
                        <ProductShow formSubmitted={formSubmitted}></ProductShow>
                    </Route>
                    <Route exact path="/new">
                        <ProductForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></ProductForm>
                    </Route>
                    <Route exact path="/detail/:_id">
                        <OneProductDetail></OneProductDetail>
                    </Route>
                    <Route exact path="/edit/:_id">
                        <EditOneProduct></EditOneProduct>
                    </Route>



                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default Main;
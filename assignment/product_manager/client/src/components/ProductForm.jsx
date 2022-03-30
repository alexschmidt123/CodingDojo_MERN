import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    let [formErrors, setFormErrors] = useState({})
    const history = useHistory();

    //handler when the form is submitted
    const createProduct = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        let formInfo = {title, price, description};
        axios.post("http://localhost:8000/api/create",formInfo)
        .then(res=>{
            console.log("res after posting the form is this-->", res);
            if(res.data.error){ //if the form is filled out improperly, we will have a key called "error" in res.data
                setFormErrors(res.data.error.errors);
            }
            else{ //if form is filled out properly
                props.setFormSubmitted(!props.formSubmitted)

                //clear the form info-> first clear out the state variables
                setTitle("");
                setPrice("");
                setDescription("");
                setFormErrors({});
                history.push("/")
            }

        })
        .catch(err=>{
            console.log("err->", err);
        })
    }
    //onChange to update Title and Price
    return (
        <div>
        <form onSubmit={createProduct}>
            <div className="form-group">
                <label htmlFor="">Title:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setTitle(e.target.value)}} value={title} />
                <p className="text-danger">{formErrors.Title?.message}</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Price:</label>
                <input type="number" name="" id="" className="form-control" onChange={(e)=>{setPrice(e.target.value)}} value={price} />
                <p className="text-danger">{formErrors.Price?.message}</p>

            </div>
            <div className="form-group">
                <label htmlFor="">Description:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setDescription(e.target.value)}} value={description} />
                <p className="text-danger">{formErrors.Description?.message}</p>

            </div>
            <input type="submit" value="Create a Product!" />
        </form>
    </div>
    )
}
export default ProductForm;

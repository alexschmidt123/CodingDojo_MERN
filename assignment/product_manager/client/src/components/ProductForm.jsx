import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const ProductForm = (props) => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const createProduct = e => {
        e.preventDefault();
        let formInfo = {title, price, description};
        axios.post("http://localhost:8000/api/create",formInfo)
        .then(res=>{
            console.log("res after posting the form is this-->", res);
            
            if(res.data.errors){
                setFormErrors(res.data.errors);
                console.log("the form is not acceptable")
            }
            else{ 
                console.log("the form is acceptable")
                props.setFormSubmitted(!props.formSubmitted)
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

    return (
        <div>
        <form onSubmit={createProduct}>
            <div className="form-group">
                <label htmlFor="">Title:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setTitle(e.target.value)}} value={title} />
                <p className="text-danger">{formErrors.title?.message}</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Price:</label>
                <input type="number" name="" id="" className="form-control" onChange={(e)=>{setPrice(e.target.value)}} value={price} />
                <p className="text-danger">{formErrors.price?.message}</p>

            </div>
            <div className="form-group">
                <label htmlFor="">Description:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setDescription(e.target.value)}} value={description} />
                <p className="text-danger">{formErrors.description?.message}</p>

            </div>
            <input type="submit" className='btn btn-primary' value="Create a Product!" />
        </form>
    </div>
    )
}
export default ProductForm;

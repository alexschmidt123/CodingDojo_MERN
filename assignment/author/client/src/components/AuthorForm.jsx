import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";

const AuthorForm = (props) => {
    const [name, setName] = useState(""); 

    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const createAuthor = e => {
        e.preventDefault();
        let formInfo = {name};
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
                setName("");
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
        <form onSubmit={createAuthor}>
            <div className="form-group">
                <label htmlFor="">Name:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setName(e.target.value)}} value={name} />
                <p className="text-danger">{formErrors.Name?.message}</p>
            </div>
            <div className='d-flex justify-content-start gap-3'>
                <Link to={`/`} className='btn btn-primary'>Cancel</Link>
                <input type="submit" className='btn btn-primary' value="Submit" />
            </div>
            
        </form>
    </div>
    )
}
export default AuthorForm;

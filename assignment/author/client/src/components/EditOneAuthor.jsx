import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";


const EditAuthorForm = (props) => {



    let [AuthorInfo, setAuthorInfo] = useState({
        name: ""
    })


    let { _id } = useParams();


    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${_id}`)
            .then(res => {
                console.log("res->", res);
                setAuthorInfo(res.data.Author);
            })
            .catch(err => {
                console.log("err->", err);
            })
    }, [])

    const changeHandler = (e) => {
        if (e.target.type === "checkbox") {
            setAuthorInfo({
                ...AuthorInfo,
                [e.target.name]: e.target.checked
            })
        } else {
            setAuthorInfo({
                ...AuthorInfo,
                [e.target.name]: e.target.value
            })
        }
    }



    const updateAuthor = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/update/${_id}`, AuthorInfo)
            .then(res => {
                console.log("res on update->", res)
                history.push('/')
            })
            .catch(err => {
                console.log("err on update", err)
            })



    }


    return (
        <div>
            <form onSubmit={updateAuthor}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" id="" className="form-control" onChange={changeHandler} value={AuthorInfo.name} />
                </div>
                <hr />
                <div className='d-flex justify-content-start gap-3'>
                    <Link to={`/`} className='btn btn-primary'>Cancel</Link>
                    <input type="submit" className='btn btn-primary' value="Update" />
                </div>
            </form>
        </div>
    );
};

export default EditAuthorForm;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";


const EditProductForm = (props) => {



    let [ProductInfo, setProductInfo] = useState({
        title: "",
        price: "",
        description: ""
    })


    let { _id } = useParams();


    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/update/${_id}`)
            .then(res => {
                console.log("res->", res);
                setProductInfo(res.data.results)

            })
            .catch(err => {
                console.log("err->", err);
            })
    }, [])

    const changeHandler = (e) => {
        //e.target.name will be the names of each input on the form input tags
        //e.target.value represents the information typed on the input
        if (e.target.type === "checkbox") {
            setProductInfo({
                ...ProductInfo,
                [e.target.name]: e.target.checked
            })
        } else {
            setProductInfo({
                ...ProductInfo,
                [e.target.name]: e.target.value
            })
        }
    }



    const updateProduct = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/update/${_id}`, ProductInfo)
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
            <p>Editing: {_id}</p>
            <form onSubmit={updateProduct}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" name="title" id="" className="form-control" onChange={changeHandler} value={ProductInfo.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="">price:</label>
                    <input type="number" name="price" id="" className="form-control" onChange={changeHandler} value={ProductInfo.price} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="description" id="" className="form-control" onChange={changeHandler} value={ProductInfo.description} />
                </div>
                <input type="submit" value="Update Product!" />
            </form>
        </div>
    );
};

export default EditProductForm;
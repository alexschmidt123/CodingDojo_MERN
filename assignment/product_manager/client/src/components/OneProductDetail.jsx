import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const OneProductDetail = () => {

    const {_id} = useParams();
    const [info, setInfo] = useState({})
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${_id}`)
            .then(res=>{
                console.log("res->", res)
                setInfo(res.data.results);
            })
            .catch(err=>{
                console.log("err->", err)
            })

    }, [])

    const deleteProduct = ()=>{
        console.log("id of product we want to delete is->", _id)
        axios.delete(`http://localhost:8000/api/delete/${_id}`)
            .then(res=>{
                console.log(res);
                history.push("/");
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div>
            <h3>{info.title}</h3>
            <p>Id: {_id}</p>
            <p>Price: ${info.price}</p>
            <p>Descriptions: {info.description}</p>
            <button onClick = {deleteProduct} className='btn btn-danger'>Delete {info.title}</button>
        </div>
    ); 
};

export default OneProductDetail;
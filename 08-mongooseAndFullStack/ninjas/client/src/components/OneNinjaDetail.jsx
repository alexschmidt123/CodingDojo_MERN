import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const OneNinjaDetail = () => {

    const {_id} = useParams();
    const [info, setInfo] = useState({})
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${_id}`)
            .then(res=>{
                console.log("res->", res)
                setInfo(res.data.results);
            })
            .catch(err=>{
                console.log("err->", err)
            })

    }, [])

    const deleteNinja = ()=>{
        console.log("id of ninja we want to delete is->", _id)
        axios.delete(`http://localhost:8000/api/ninjas/${_id}`)
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
            <h3>Details about {info.firstName}</h3>
            <p>Id: {_id}</p>
            <p>Age: {info.age}</p>
            <p>Veteran Status: <b>{info.isVeteran? "Veteran": "Not a Veteran"}</b></p>
            <button onClick = {deleteNinja} className='btn btn-danger'>Delete {info.firstName}</button>
        </div>
    ); 
};

export default OneNinjaDetail;
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";


const EditNinjaForm = (props) => {

   

    let [ninjaInfo, setNinjaInfo] = useState({
        firstName: "",
        age: "",
        isVeteran: false,
        profilePicUrl:""
    })


    let {_id} = useParams();


    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${_id}`)
            .then(res=>{
                console.log("res->", res);
                setNinjaInfo(res.data.results)
    
            })
            .catch(err=>{
                console.log("err->", err);
            })
    },[])

    const changeHandler = (e)=>{
        //e.target.name will be the names of each input on the form input tags
        //e.target.value represents the information typed on the input
        if(e.target.type ==="checkbox"){
            setNinjaInfo({
                ...ninjaInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setNinjaInfo({
                ...ninjaInfo,
                [e.target.name]: e.target.value
            })
        }
    }

    
    
    const updateNinja = (e)=>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/ninjas/${_id}`, ninjaInfo)
            .then(res=>{
                console.log("res on update->", res)
                history.push('/')
            })
            .catch(err=>{
                console.log("err on update", err)
            })

        

    }


    return (
        <div>
            <p>Editing: {_id}</p>
            <form onSubmit={updateNinja}>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input type="text" name="firstName" id="" className="form-control" onChange={changeHandler} value={ninjaInfo.firstName} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Age:</label>
                    <input type="number" name="age" id="" className="form-control" onChange={changeHandler} value={ninjaInfo.age} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture URL:</label>
                    <input type="text" name="profilePicUrl" id="" className="form-control" onChange={changeHandler} value={ninjaInfo.profilePicUrl} />  
                </div>
                <div className="form-group">
                    <label htmlFor="isVeteran">Is Veteran?</label>
                    <input type="checkbox" name="isVeteran" id="isVeteran" onChange={changeHandler} checked={ninjaInfo.isVeteran}/>
                </div>
                <input type="submit" value="Update Ninja!" />
            </form>
        </div>
    );
};

export default EditNinjaForm;
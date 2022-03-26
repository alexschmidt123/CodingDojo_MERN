import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllNinjas = (props) => {

    //state variable to store all ninjas in
    const [ninjaList, setNinjaList] = useState([]);


    useEffect(()=>{
        axios.get("http://localhost:8000/api/ninjas")
            .then(res=>{
                console.log("response is this-->",res.data.results)
                setNinjaList(res.data.results);
            })
            .catch(err=>{
                console.log("errr", err)
            })
    },[props.formSubmitted])

    const deleteNinja = (idOfNinja)=>{
        axios.delete(`http://localhost:8000/api/ninjas/${idOfNinja}`)
            .then(res=>{
                console.log("res when deleting->", res)
                // setNinjaList(ninjaList.filter(ninjaObj => ninjaObj._id != idOfNinja)); //this is the one liner way to remove from the dom
                let filteredList = ninjaList.filter((ninjaObj)=>{
                    return ninjaObj._id != idOfNinja //return back only the ninjas whose id is not the id of the ninja we want to delete
                })
                setNinjaList(filteredList)
            })
            .catch(err=>{
                console.log(err)
            })



        

    }


    return (
        <div>
            <h2>All the ninjas below</h2>
            {
                ninjaList.map((ninjaObj)=>{
                    return(
                        <div className="card" key = {ninjaObj._id}>
                            <div className="card-body">
                                <h4 className="card-title"><Link to={`/details/${ninjaObj._id}`}>{ninjaObj.firstName}</Link></h4>
                                <p className="card-text">
                                    Age: {ninjaObj.age}
                                </p>
                                <img src={ninjaObj.profilePicUrl} alt="" height="200px" width="200px" />
                                <br />
                                <Link to={`/edit/${ninjaObj._id}`} className='btn btn-secondary m-3'>Edit {ninjaObj.firstName}</Link>
                                <button onClick = {()=>{deleteNinja(ninjaObj._id)}} className="btn btn-danger m-3">Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllNinjas;
import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const NinjaForm = (props) => {

    let [firstName,setFirstName] = useState("");
    let [age,setAge] = useState("");
    let [isVeteran,setIsVeteran] = useState(false);
    let [profilePicUrl,setProfilePicUrl] = useState("");


    let [formErrors, setFormErrors] = useState({})


    const history = useHistory();

    const createNinja = (e)=>{
        e.preventDefault();
        //create an object to store the from info in
        let formInfo = {firstName, age, isVeteran,profilePicUrl};

        axios.post("http://localhost:8000/api/ninjas",formInfo)
            .then(res=>{
                console.log("res after posting the form is this-->", res);
                if(res.data.error){ //if the form is filled out improperly, we will have a key called "error" in res.data
                    setFormErrors(res.data.error.errors);
                }
                else{ //if form is filled out properly
                    props.setFormSubmitted(!props.formSubmitted)
    
                    //clear the form info-> first clear out the state variables
                    setFirstName("");
                    setAge("");
                    setIsVeteran(false);
                    setProfilePicUrl("");
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
            <form onSubmit={createNinja}>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} />
                    <p className="text-danger">{formErrors.firstName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Age:</label>
                    <input type="number" name="" id="" className="form-control" onChange={(e)=>{setAge(e.target.value)}} value={age} />
                    <p className="text-danger">{formErrors.age?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture URL:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>{setProfilePicUrl(e.target.value)}} value={profilePicUrl} />
                    <p className="text-danger">{formErrors.profilePicUrl?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="isVeteran">Is Veteran?</label>
                    <input type="checkbox" name="" id="isVeteran" onChange={(e)=>{setIsVeteran(e.target.checked)}} checked={isVeteran}/>
                </div>
                <input type="submit" value="Create Ninja!" />
            </form>
        </div>
    );
};

export default NinjaForm;
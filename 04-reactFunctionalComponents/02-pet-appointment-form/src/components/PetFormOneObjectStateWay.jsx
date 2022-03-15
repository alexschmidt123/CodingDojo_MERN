import React, { useState } from  'react';

const PetFormOneObjectStateWay = ()=>{
    const [formInfo, setFormInfo ] = useState({
        //we can have keys here that will represent the form inputs we will collect info for
        name: "",
        age: null,
        date: "",
        petImg: ""
    })

    const showPetImageError = ()=>{
        if(formInfo.petImg.length==0){
            return <p className='text-danger'>Image is required!</p>
        }else{
            return null
        }

    }

    const changeHandler = (e)=>{
        console.log("this gives us the name of the input that is being changed-->", e.target.name)
        
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" id="" className="form-control" onChange={changeHandler}    /> 
                   {
                       //if the name.length is less than 4 and if it is greater than 0
                    formInfo.name.length<4 && formInfo.name.length>0? <p className='text-danger'>Name must be at least 4 characters</p> : null
                   }
                </div>
                <div className="form-group">
                    <label htmlFor="">Age:</label>
                    <input type="number" name="age" id="" className="form-control" onChange={changeHandler}  /> 
                </div>
                 {
                     formInfo.age<0? <p className='text-danger'>Please Enter a valid age!</p>: null
                 }

                <div className="form-group">
                    <label htmlFor="">Drop off Date:</label>
                    <input type="date" name="date" id="" className="form-control" onChange={changeHandler} /> 
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Image:</label>
                    <input type="text" name="petImg" id="" className="form-control" onChange={changeHandler} /> 
                    {showPetImageError()}
                </div>
                <input type="submit" value="Make Appointment!" className="btn btn-success mt-3" />
            </form>
            <p>Registered name: {formInfo.name} </p>
            <p>Age: {formInfo.age}</p>
            <p>We are scheduled for: {formInfo.date}</p>
            <p><img src={formInfo.petImg} alt="" height="100px" width="100px" /></p>

        </>

    )
}


export default PetFormOneObjectStateWay;
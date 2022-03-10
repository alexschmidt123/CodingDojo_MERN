import React, { useState } from  'react';

const PetForm = ()=>{
    //name
    let [name, setName] = useState("")

    //age
    let [age, setAge]= useState(null)

    //appointment date
    let [date, setDate] = useState("")

    //pet image
    let [petImg, setPetImg] = useState("")

    

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>setName(e.target.value)}    /> 
                </div>
                <div className="form-group">
                    <label htmlFor="">Age:</label>
                    <input type="number" name="" id="" className="form-control" onChange={(e)=>setAge(e.target.value)}  /> 
                </div>
                <div className="form-group">
                    <label htmlFor="">Drop off Date:</label>
                    <input type="date" name="" id="" className="form-control" onChange={(e)=>setDate(e.target.value)} /> 
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Image:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>setPetImg(e.target.value)} /> 
                </div>
                <input type="submit" value="Make Appointment!" className="btn btn-success mt-3" />
            </form>
            <p>Registered name: {name} </p>
            <p>Age: {age}</p>
            <p>We are scheduled for: {date}</p>
            <p><img src={petImg} alt="" height="100px" width="100px" /></p>

        </>

    )
}


export default PetForm;
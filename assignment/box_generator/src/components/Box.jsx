import React, { useState } from 'react';


const Box = () => {


    let [favColor, setFavColor] = useState("");
    let [boxList, setBoxList] = useState([])


    const submitHandler = (e) => {
        e.preventDefault(); //prevents the form from reloading the whole page
        console.log({ favColor})
        let newBoxObj = { favColor} //create a box object using the info from form
        setFavColor("")
        setBoxList([...boxList, newBoxObj]) //set the boxList variable using the setter (setboxList()) to contain a copy of whatever is currently already in the box list (...boxList) and add the new box object to the end of that list (, newNinjaObj);
    }

    const deleteBox = (i) => {
        console.log("deleting at index -->", i) 
        let filteredBoxList = boxList.filter((Box, index) => {
            return index != i;
        })
        console.log("filtered Box list --->", filteredBoxList)
        setBoxList(filteredBoxList)
    }



    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Color:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e) => { setFavColor(e.target.value) }} value={favColor} />
                </div>
                <input type="submit" value="Add Ninja!" className="btn btn-success mt-3" />
            </form>
            
            {
                boxList.map(
                    (box, i) => {
                    return <div key={i} style={{ backgroundColor: box.favColor, height: "200px", width : "200px", border: box.projectUploaded ? "20px solid gold" : "" }}>
                                <p>Color: {box.favColor}</p> 
                                <button onClick={() => deleteBox(i)} className="btn btn-danger">Delete {box.name}</button>
                            </div>
                    }
                )
            }
        </>

    )
}

export default Box;
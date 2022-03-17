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
            <form onSubmit={submitHandler} style={{display: "flex", justifyContent:"center", gap: "30px" }}>
                <div className="form-group">
                    <label>Color: </label>
                    <input type="text"  className="form-control" onChange={(e) => { setFavColor(e.target.value) }} value={favColor} />
                </div>
                <input type="submit" value="Add a Box!" className="btn btn-success mt-3" />
            </form>
        <div style = {{display: "flex", gap: "20px", margin: "20px auto"}}>
            {
                boxList.map(
                    (box, i) => {
                    return <div key={i} style={{backgroundColor: box.favColor, height: "200px", width : "200px" }}>
                                <h3>{box.favColor}</h3> 
                                <button onClick={() => deleteBox(i)} className="btn btn-danger"><h5>Delete {box.name}</h5></button>
                            </div>
                    }
                )
            }
        </div>
            
        </>

    )
}

export default Box;
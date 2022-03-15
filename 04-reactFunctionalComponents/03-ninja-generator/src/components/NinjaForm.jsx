import React, {useState} from 'react';


const NinjaForm = ()=>{

    //create state variables to store info collected from each form input
    let [name, setName] = useState("");
    let [profilePicUrl, setProfilePicUrl] = useState("");
    let [favColor, setFavColor] = useState("");
    let [favLang, setFavLang] = useState("");

    //variable for if student has completed a project or if they have not--> similar to to-do list assignment where a task is complete or it is not
    let [projectUploaded, setProjectUploaded] = useState(false)

    //state variable to store all the submitted ninja objects inside and initialize it as an empty list
    let [ninjaList, setNinjaList] = useState([])


    const submitHandler = (e)=>{
        e.preventDefault(); //prevents the form from reloading the whole page
        console.log({name, profilePicUrl, favColor, favLang})
        let newNinjaObj = {name, profilePicUrl, favColor, favLang, projectUploaded} //create a ninja object using the info from form

        //clear out the state variables which will clear out the form inputs if i assign the from inputs values to be the state variables
        setName("")
        setProfilePicUrl("")
        setFavColor("")
        setFavLang("JS")

        //add the ninja object to the ninjaList array
        // ninjaList.push(newNinjaObj) //this happened to work, but is not best practice in react. We must use the setter to set state when we want to update state

        setNinjaList([...ninjaList, newNinjaObj]) //set the ninjaList variable using the setter (setNinjaList()) to contain a copy of whatever is currently already in the ninja list (...ninjaList) and add the new ninja object to the end of that list (, newNinjaObj);

    }


    //delete ninja function
    const deleteNinja = (i)=>{
        console.log("deleting at index -->", i) //i represents the index of the ninja we clicked the delete button

        //use the filter function to loop through the original array and filter out the item we want to delete by the index number 
        let filteredNinjaList = ninjaList.filter((ninja,index)=>{
            return index!=i;
        })

        console.log("filtered ninja list --->", filteredNinjaList)

        //update our state array ninjaList to be this new filteredNinjaList
        setNinjaList(filteredNinjaList)
    }

    const updateStudent = (i)=>{
        console.log("index number of student we want to update is -->", i)
        console.log("here is the ninja want to update", ninjaList[i].projectUploaded)

        //make a copy of our original array and modify the copy
        let copyOfNinjaList = [...ninjaList]
        //update the projectUploaded project of the ninja object from the ninjasList at the specified index to toggle from false to true or true to false
        copyOfNinjaList[i].projectUploaded = !copyOfNinjaList[i].projectUploaded


        //update the state variable using the modified copy so that react knows to update the DOM
        setNinjaList(copyOfNinjaList)





    }



    return (
        <>
        <form onSubmit = {submitHandler}>
            <div className="form-group">
                <label htmlFor="">Name:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setName(e.target.value)}} value={name}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Profile Picture Link:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setProfilePicUrl(e.target.value)}} value={profilePicUrl} />
            </div>
            <div className="form-group">
                <label htmlFor="">Favorite Color:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setFavColor(e.target.value)}} value={favColor}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Favorite Language:</label>
                <select name="" id="" className='form-select' onChange={(e)=>{setFavLang(e.target.value)}} value={favLang}>
                    <option value="Python">Python</option>
                    <option value="JS">JS</option>
                    <option value="Java">Java</option>
                    <option value="C#">C#</option>
                </select>
            </div>
            <input type="submit" value="Add Ninja!" className="btn btn-success mt-3" />

            </form>
   
            {
              ninjaList.map((ninja,i)=>{
                  return <div key={i} style= {{backgroundColor: ninja.favColor, border: ninja.projectUploaded? "20px solid gold" : ""}}>
                      <h1>{ninja.name} - Index number: {i}</h1>
                      <p>Favorite Color: {ninja.favColor}</p>
                      <p>Favorite Language: {ninja.favLang}</p>
                      <p><img src={ninja.profilePicUrl} alt="" height="200px" width="200px" /></p>
                      <button onClick={()=>deleteNinja(i)} className="btn btn-danger">Delete {ninja.name}</button>
                      <label htmlFor="">Student completed project</label>
                      <input onClick = {()=>updateStudent(i)} type="checkbox" name="" id="" />
                      <hr />
                  </div>
              }) 
            }
        </>
            
    )
}

export default NinjaForm;
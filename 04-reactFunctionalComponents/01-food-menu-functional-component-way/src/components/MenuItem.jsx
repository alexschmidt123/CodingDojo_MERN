import React, {useState} from 'react';

const MenuItem = (props)=> {

    //initialize the state variable to keep track of like count -> initialize it to start off with the number of likes we get from props
    let [likes, setLikes ] = useState(props.likes)



    //regular javascript code can go here before the return statement
    const addOneLike = ()=>{
        setLikes(likes+1)
    }


    return <>
    <div>
        <h3>{props.dishName}</h3>
        <p>Price: ${props.price}</p>
        <p>Number of likes: {likes}</p>
        <p>Description: Its deep fried in basil oil and basil leaves and all that. Its nice. </p> 
        <button onClick={addOneLike}>Like</button>
       
    </div>
    <hr />
    </>
}

export default MenuItem;

import React from 'react';

const PersonCard = (props)=> {

    return <>
    <div>
        <h3>{props.lastname},{props.firstname}</h3>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.color}</p>
    </div>
    <hr />
    </>
}

export default PersonCard;
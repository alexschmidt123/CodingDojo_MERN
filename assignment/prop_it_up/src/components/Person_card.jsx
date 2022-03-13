import React from 'react';

const Person_card = (props)=> {

    return <>
    <div>
        <h3>{props.fullname}</h3>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.color}</p>
    </div>
    <hr />
    </>
}

export default Person_card;
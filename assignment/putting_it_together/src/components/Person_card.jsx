import React, {useState} from 'react';

const PersonCard = (props)=> {
    let [age, setAge ] = useState(props.age)
    const addOneYear = ()=>{
        setAge(age+1)
    }
    return <>
    <div>
        <h3>{props.fullname}</h3>
        <p>Age: {age}</p>
        <p>Hair Color: {props.color}</p>
        <button onClick={addOneYear}>One Year Passed</button>
    </div>
    <hr />
    </>
}

export default PersonCard;
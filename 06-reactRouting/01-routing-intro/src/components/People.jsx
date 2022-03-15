import React from 'react';
import { useParams } from "react-router";

const People = () => {
    //extrace the route param from the route and put it into a variable
    const { id, borderColor} = useParams();

    console.log("id", id)
    console.log("borderColor", borderColor)


    return (
        <div style = {{border: borderColor===undefined?"20px solid gray": `20px solid ${borderColor} `}}>
            {

            isNaN(id)? 
                <h1>Could not find player with the id of {id}. Please use numeric IDs</h1>:
                id == 23?
                    <p>Lebron James <img src="https://i.insider.com/4fd16c7fecad043b4d000001?width=600&format=jpeg&auto=webp" alt="" /></p>:
                    <h1>Details about person number {id}</h1>
        }
        </div>
    );
};

export default People;


import React, { useState, useEffect } from 'react';
import { useParams } from "react-router"
import axios from 'axios';

const Details = () => {

    const { categories, id } = useParams();

    let [info, setInfo] = useState({})

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${categories}/${id}`)
        .then(response => {
                console.log("response from the details", response)
                setInfo(response.data)
            })
        .catch(err => console.log(err))

    },[categories,id])


    return (
        <div>
            {
                categories === "people"?
                <>
                    <h1>Name: {info.name}</h1>
                    <p>Height: {info.height}</p>
                    <p>Mass: {info.mass}</p>
                    </>
                : categories === "planets"?
                <>
                    <h1>Name: {info.name}</h1>
                    <p>Climate: {info.climate}</p>
                    <p>Terrian: {info.terrain}</p>
                    </>
                : categories === "starships"?
                <>
                    <h1>Name: {info.name}</h1>
                    <p>Model: {info.model}</p>
                    <p>Manufacturer: {info.manufacturer}</p>
                    </>
                : 
                <> 
                <h1>There are not the droids you're looking for.</h1>
                <img src='https://cdn.vox-cdn.com/thumbor/yyZ3TldFBfFHkrMS3X694rNg7_w=/0x0:786x393/1520x1013/filters:focal(331x135:455x259):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65101167/obi-wan.0.0.jpg' alt='obi one'/>
                </>
                
            }
        </div>
    );
};

export default Details;
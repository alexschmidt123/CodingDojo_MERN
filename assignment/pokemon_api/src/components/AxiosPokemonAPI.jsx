import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AxiosPokemonAPI = ()=>{

    let [pokemonWithAxiosList, setPokemonWithAxiosList] = useState([])

    const getPokemonsAPI=()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1125")
            .then((response)=>{
                setPokemonWithAxiosList(response.data.results)
            })
            .catch((err)=>{
                console.log("error when fetching. something went wrong. ", err )
            })
        }



    return (
        <>
            
            <p>PokemonWithAxios</p>
            <button onClick = {getPokemonsAPI}>Click here to get the list of Pokemons</button>
            {
                pokemonWithAxiosList.map((pokemonWithAxiosObj, index)=>{
                    return <div key={index}>
                        <h1>{pokemonWithAxiosObj.name}</h1>
                        <hr />
                    </div>
                })

            }

        </>
    )
}
export default AxiosPokemonAPI ;
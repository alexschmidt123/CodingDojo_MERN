import React, {useState} from 'react';


const PokemonAPI = ()=>{
    let [pokemonList, setPokemonList] = useState([])


    const getPokemonsFromAPI = ()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1125")
            .then((response)=>{
                return response.json()
            })
            .then((response)=>{
                console.log("got the data!!! (eggs are finished boiling. Now i can put the eggs on the toast")
                console.log(response)
                setPokemonList(response.results)
            })
            .catch((err)=>{
                console.log("error when fetching. something went wrong. ", err )
            })      
    }


    return (
        <>
            <button onClick = {getPokemonsFromAPI}>Click here to get the list of Pokemons</button>
            {
                pokemonList.map((pokemonObj, index)=>{
                    return <div>
                        <h1>{pokemonObj.name}</h1>
                        <hr/>
                    </div>
                })

            }

        </>
    )
}


export default PokemonAPI;
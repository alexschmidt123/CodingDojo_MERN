import React, {useState, useEffect} from 'react';
import axios from 'axios';


const CoinGeneratorWithAxiosAndUseEffect = ()=>{

    //state variable that we will save the array of coins (or array of pokemon, etc;) into
    let [coinList, setCoinList] = useState([])

    let [buttonClicked , setButtonClicked ] = useState(false)
    let [tryAgain, setTryAgain] = useState(false)


    //useEffect hook allows us to tell the react component which block of code to run only on the first render
    useEffect(()=>{

        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then((response)=>{
                console.log("got the data!!! (eggs are finished boiling. Now i can put the eggs on the toast")
                console.log(response)
                setCoinList(response.data)
            })
            
            .catch((err)=>{
                console.log("error when fetching. something went wrong. ", err )
                setTryAgain(!tryAgain)
            }) 
    },[buttonClicked, tryAgain]) //any change in a variable in the dependency array will trigger the useEffect callback function to run again
   
    
   
    
        


    return (
        <>
            
            <p>Shout out to Coin Gecko for this API!</p>
            <button onClick= {()=>{setButtonClicked(!buttonClicked)}}>Get Updated Prices</button>
            {
                coinList.map((coinObj, index)=>{
                    return <div key={index}>
                        <h1>{coinObj.name}</h1>
                        <p>${coinObj.current_price}</p>
                        <p>ATH price: ${coinObj.ath}</p>
                        <p><img src={coinObj.image} alt="" /></p>
                        <hr />
                    </div>
                })

            }

        </>
    )
}


export default CoinGeneratorWithAxiosAndUseEffect;
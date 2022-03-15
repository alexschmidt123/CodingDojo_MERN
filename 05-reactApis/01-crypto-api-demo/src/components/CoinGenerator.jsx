import React, {useState} from 'react';


const CoinGenerator = ()=>{

    //state variable that we will save the array of coins (or array of pokemon, etc;) into
    let [coinList, setCoinList] = useState([])


    const getCoinsFromAPI = ()=>{
        console.log("Getting ready to make an api call to get coins from another application!")
        console.log("getting ready to boil some eggs, putting the eggs into the pan to boil")
        //use fetch() to make an api call. Fetch returns to us a "promise". A Promise is something where we dont know how long it takes to finish executing
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then((response)=>{ //the .then() means whenever the promise (or api call in this example) finishes executing and getting us back the data, then run the code inside the .then()
                //convert our data to json (key value pairs -> javascript object) so that our javascript application can understand it
                return response.json()
            })
            .then((response)=>{
                console.log("got the data!!! (eggs are finished boiling. Now i can put the eggs on the toast")
                console.log(response)
                setCoinList(response)
            })
            //.catch() will run if the fetch() process breaks for any reason (if api is down, if th eurl you gave the fetch() is invalid, etc;)
            .catch((err)=>{
                console.log("error when fetching. something went wrong. ", err )
            })
        
        console.log("cutting up auvocados")
        console.log("getting the salt and pepper out")
        console.log("smashing auvocados")
        
    }


    return (
        <>
            <button onClick = {getCoinsFromAPI}>Click here to get current coins</button>
            <p>Shout out to Coin Gecko for this API!</p>
            {
                coinList.map((coinObj, index)=>{
                    return <div>
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


export default CoinGenerator;
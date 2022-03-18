const express = require("express"); //import express so we can use express features
const app = express(); //create an instance of express and store it in the variable "app"
const port = 8000; //indicate the port number to run on


// make sure these lines are above any app.get or app.post code blocks. These next two lines help our app to work with post data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

let quotes = [
    {content: "It is not the mountains ahead that will wear you out, it is the pebble in your shoe", author:"Muhammad Ali"},
    {content:"A wise man once said nothing at all", author:"Wes"},
    {content:"Comparison is a theif of joy", author:"Theodore Roosevelt"},
    {content:"Fall down 7 times stand up 8", author:"Japanese Proverb"},
    {content:"You Attract what you vibrate", author:"Fritz"},
    {content:"Wherever you go, there you are", author:"Eckhart Tolle"}
]



//routes for our api (api endpoints)
app.get("/api/hello", (req,res)=>{
    res.json({msg: "hello world! Wazzaaaaaaa!!!"})
})


//get request to get all the quotes
app.get("/api/quotes",(req,res)=>{
    res.json({count: quotes.length , results: quotes})
})


//get one quote based on index
app.get("/api/quotes/:idx", (req,res)=>{
    res.json({count: 1, quote: quotes[req.params.idx] })
})

//create one quote
app.post("/api/quotes", (req,res)=>{
    //req.body contains the post data
    console.log("req.body-->", req.body)

    //push the quote object sent from the post request into our quotes array
    quotes.push(req.body)

    //respond with the quotes array that has one more thing in it now
    res.json({count: quotes.length , results: quotes})
})

//update one quote
app.put("/api/quotes/:idx", (req,res)=>{
    //the index of the quote we want to update is req.params.idx

    //the info we want to update with req.body
    quotes[req.params.idx] = req.body

    res.json({count: quotes.length , results: quotes})
})

//delete one quote
app.delete("/api/quotes/:idx", (req,res)=>{

    quotes.splice(req.params.idx, 1);

    res.json({count: quotes.length , results: quotes})
})






//have this at the bottom of your file. This tells the app to listen for requests on port 8000
app.listen( port, () => console.log(`Listening on port: ${port}`) );





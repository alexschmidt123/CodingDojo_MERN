const express = require("express");
const app = express();
const port = 8000;
//cors import -> this will allow our backend api to communicate with a front end application
const cors = require("cors"); //cross origin resource sharing (cors)

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

//tell the server to run the code in the mongoose.config.js file
require("./server/config/mongoose.config")

//tell the server to connect to the routes file
require("./server/routes/ninja.routes")(app)



app.listen( port, () => console.log(`Listening on port: ${port}`) );
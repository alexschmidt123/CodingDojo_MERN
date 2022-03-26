const express = require("express"); //require is how we import a node module
const app = express(); //initialize an instance of express (an application)
const port = 8000;
const cors = require("cors"); //cross-origin-resource-sharing-> allows our express backend app to share resources (data!) with our front end react applicaiton

app.use( express.json() ); //enable the app to be able to parse json
app.use( express.urlencoded({ extended: true }) ); //enable the app to be able to collect form info. Post requests wont work without this
app.use(cors()) //enable cors

//tell the server to run the code in the mongoose.config.js file
require("./server/config/mongoose.config") //connect our application to the mongodb database using mongoose as a middleman. Mongoose is our ORM (object relational mapper)

//tell the server to connect to the routes file
require("./server/routes/thing.routes")(app) //passing in the app object to the routes so the routes can do things like app.get app.post, etc;



app.listen( port, () => console.log(`Listening on port: ${port}`) );
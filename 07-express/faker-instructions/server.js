const express = require("express"); //import express so we can use express features
const app = express(); //create an instance of express and store it in the variable "app"
const port = 8000; //indicate the port number to run on
const { faker } = require('@faker-js/faker');

// make sure these lines are above any app.get or app.post code blocks. These next two lines help our app to work with post data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



class Product {
    constructor() {
      this.name = faker.commerce.product();
      this.price = faker.commerce.price();
    //   this.department = 
    }
}

app.get("/api/products", (req,res)=>{
  let fakeProduct = new Product();

  res.json({fakeProduct})
})






//have this at the bottom of your file. This tells the app to listen for requests on port 8000
app.listen( port, () => console.log(`Listening on port: ${port}`) );

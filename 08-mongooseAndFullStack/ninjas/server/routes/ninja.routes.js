const NinjaController = require('../controllers/ninja.controller');




module.exports = (app) =>{
    app.get('/api/hello', NinjaController.helloWorld)

    //find all api endpoint
    app.get("/api/ninjas", NinjaController.findAllNinjas)

    //create one api endpoint
    app.post("/api/ninjas", NinjaController.createNinja)

    //find one by id api endpoint
    app.get("/api/ninjas/:id", NinjaController.getOneNinja)

    //update one by id api endpoint
    app.put("/api/ninjas/:id", NinjaController.updateOneNinja)

    //delete one by id api endpoint
    app.delete("/api/ninjas/:id", NinjaController.deleteOneNinja)

}


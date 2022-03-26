const ThingController = require('../controllers/thing.controller');




module.exports = (app) =>{

    //find all api endpoint
    app.get("/api/things", ThingController.findAllThings)

    //create one api endpoint
    app.post("/api/things", ThingController.createThing)

    //find one by id api endpoint
    app.get("/api/things/:id", ThingController.getOneThing)

    //update one by id api endpoint
    app.put("/api/things/:id", ThingController.updateOneThing)

    //delete one by id api endpoint
    app.delete("/api/things/:id", ThingController.deleteOneThing)

}


const Thing = require('../models/thing.model');

//Thing.find(), thing.create() etc; --> theser are built in mongoose commands that help make it easier to query the mongodb

module.exports.findAllThings = (req,res)=>{
    Thing.find()
        .then(allThings=>{ //allThings is an array of objects
            res.json({results: allThings})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createThing = (req,res)=>{
    //req.body is--> form information
    Thing.create(req.body)
        .then(newlyCreatedThing =>{  //newly created things is the object that just got created
            res.json({results: newlyCreatedThing})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.getOneThing = (req,res)=>{
    Thing.findOne({_id: req.params.id })
        .then(foundThing =>{
            res.json({results: foundThing})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateOneThing = (req,res)=>{
    Thing.findOneAndUpdate(
        {_id: req.params.id },
        req.body,
        { new: true, runValidators: true } //new:true means give back the information about the new update
    )
        .then(updatedThing=>{
            res.json({results: updatedThing})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.deleteOneThing = (req,res)=>{
    Thing.deleteOne({_id: req.params.id })
        .then(deletedThing =>{
            res.json({results: deletedThing})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));

}
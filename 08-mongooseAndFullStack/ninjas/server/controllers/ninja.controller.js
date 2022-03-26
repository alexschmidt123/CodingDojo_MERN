const Ninja = require('../models/ninja.model');




module.exports.helloWorld = (req,res)=>{
    res.json({msg:"hello world modularized!"})
}


module.exports.findAllNinjas = (req,res)=>{
    Ninja.find()
        .then(allNinjas=>{
            res.json({results: allNinjas})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNinja = (req,res)=>{
    console.log("req.body-->", req.body)
    Ninja.create(req.body)
        .then(newlyCreatedNinja =>{
            res.json({results: newlyCreatedNinja})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.getOneNinja = (req,res)=>{
    Ninja.findOne({_id: req.params.id })
        .then(foundNinja =>{
            res.json({results: foundNinja})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateOneNinja = (req,res)=>{
    Ninja.findOneAndUpdate(
        {_id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedNinja=>{
            res.json({results: updatedNinja})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.deleteOneNinja = (req,res)=>{
    Ninja.deleteOne({_id: req.params.id })
        .then(deletedNinja =>{
            res.json({results: deletedNinja})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));

}
const { Author } = require('../models/author.model');
module.exports.helloWorld = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(Author => response.json(Author))
        .catch(err => response.json(err));
}

module.exports.getAllAuthors = (request, response) => {
    Author.find()
        .then(Authors => response.json({results: Authors}))
        .catch(err => response.json(err))
}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params._id })
        .then(oneAuthor => res.json({ Author: oneAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateOneAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor=>{
            res.json({results: updatedAuthor})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.deleteOneAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

const Joke = require('../models/joke.model')

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.CreateJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ results: newJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.getOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then(oneJoke => res.json({ Joke: oneJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateOneJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke=>{
            res.json({results: updatedJoke})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.getOneRandomJoke = (req, res) => {
    let RandomId = 1;
    Joke.findOne({ _id: req.params.RandomId })
        .then(oneJoke => res.json({ Joke: oneJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
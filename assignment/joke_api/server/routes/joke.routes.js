const JokeController = require('../controllers/joke.controller');

module.exports = app => {

    app.get('/api/jokes', JokeController.getAllJokes); 
    app.post('/api/jokes/new', JokeController.CreateJoke);
    app.get('/api/jokes/:_id', JokeController.getOneJoke);
    app.put('/api/jokes/update/:_id', JokeController.updateOneJoke);
    app.get('/api/jokes/random', JokeController.getOneRandomJoke);   
    app.delete('/api/jokes/delete/:_id', JokeController.deleteOneJoke);
}

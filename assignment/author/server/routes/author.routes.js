const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api', AuthorController.helloWorld);
    app.post('/api/create', AuthorController.createAuthor);
    app.get('/api/author', AuthorController.getAllAuthors);
    app.get('/api/:_id', AuthorController.getOneAuthor);
    app.put('/api/update/:_id', AuthorController.updateOneAuthor);
    app.delete('/api/delete/:_id', AuthorController.deleteOneAuthor);
}


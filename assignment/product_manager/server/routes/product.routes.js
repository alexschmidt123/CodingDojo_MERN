const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.helloWorld);
    app.post('/api/create', ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/:_id', ProductController.getOneProduct);
    app.put('/api/update/:_id', ProductController.updateOneProduct);
    app.delete('/api/delete/:_id', ProductController.deleteOneProduct);
}


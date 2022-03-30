const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.helloWorld);
    app.post('/api/create', ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProducts);
}


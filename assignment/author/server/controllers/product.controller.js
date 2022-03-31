const { Product } = require('../models/product.model');
module.exports.helloWorld = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find()
        .then(products => response.json({results: products}))
        .catch(err => response.json(err))
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params._id })
        .then(oneProduct => res.json({ Product: oneProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateOneProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct=>{
            res.json({results: updatedProduct})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.deleteOneProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

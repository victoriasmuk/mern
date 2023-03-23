const { ProductModel } = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createNewProduct = (req, res) => {
    const {title, price, description} = req.body;
    ProductModel.create({
        title,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.findAllProducts = (req, res) => {
    ProductModel.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err));
}

module.exports.findProductById = (req, res) => {
    ProductModel.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.updateProductById = (req,res) => {
    ProductModel.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err));
}

module.exports.deleteProductById = (req,res) => {
    ProductModel.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}
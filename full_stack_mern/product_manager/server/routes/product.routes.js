const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/products/new', ProductController.createNewProduct);
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findProductById);
    app.put('/api/products/edit/:id', ProductController.updateProductById);
    app.delete('/api/products/delete/:id', ProductController.deleteProductById);
};
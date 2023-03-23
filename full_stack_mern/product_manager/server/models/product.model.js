const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String }
}, { timestamps: true });

module.exports.ProductModel = mongoose.model('Product', ProductSchema);
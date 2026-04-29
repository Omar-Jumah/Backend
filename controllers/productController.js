const Product = require('../models/productModel');

async function createProduct(req, res) {
    try {
        const product = await Product.create({
            productName: req.body.productName,
            description_p: req.body.description_p,
            original_image_url: req.body.original_image_url,
            user_id: req.body.user_id
        });
        res.send(product);
    } catch (error) {
        res.status(500).json({ message: 'error', error: error.message });
    }
}
async function getProductById(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'error', error: error.message });
    }
}
async function getAllProducts(req, res) {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'error', error: error.message });
    }
}
async function getProductsByUserId(req, res) {
    try {
        const products = await Product.find({ user_id: req.params.userId });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'error', error: error.message });
    }
}
module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    getProductsByUserId
}

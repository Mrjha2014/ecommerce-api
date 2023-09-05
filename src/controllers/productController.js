// productController.js
// This file serves as the controller for all product-related functionalities.
// It contains the business logic for handling products.

// Import required models
const Product = require('../models/Product');
const Counter = require('../models/Counter');

// Function to create a new product
const createProduct = async (req, res) => {
    try {
        const counter = await Counter.findByIdAndUpdate(
            'productId',
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );

        const { name, quantity } = req.body;
        const product = new Product({
            id: counter.seq,
            name,
            quantity
        });

        await product.save();
        res.status(201).json({ data: { product: { name: product.name, quantity: product.quantity } } });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Function to list all products
const listProducts = async (req, res) => {
    try {
        const products = await Product.find();
        const filteredProducts = products.map(product => ({
            id: product.id,
            name: product.name,
            quantity: product.quantity
        }));
        res.status(200).json({ data: { products: filteredProducts } });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fetch a single product by its ID
const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findOne({ id });
        if (!product) {
            return res.status(404).json({ data: { message: 'Product not found' } });
        }
        res.status(200).json({ data: { product: { id: product.id, name: product.name, quantity: product.quantity } } });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Function to delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOneAndDelete({ id });

        if (product) {
            res.status(200).json({ data: { message: 'Product deleted successfully' } });
        } else {
            res.status(404).json({ data: { message: 'Product not found' } });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Function to update the quantity of a product
const updateProductQuantity = async (req, res) => {
    try {
        const { id } = req.params;
        const { number } = req.query;

        const product = await Product.findOneAndUpdate(
            { id },
            { quantity: number },
            { new: true }
        );

        if (product) {
            res.status(200).json({
                data: {
                    product: {
                        id: product.id,
                        name: product.name,
                        quantity: product.quantity
                    },
                    message: 'Quantity updated successfully'
                }
            });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Export the functions as methods of this controller module
module.exports = {
    createProduct,
    listProducts,
    getProductById,
    deleteProduct,
    updateProductQuantity
};

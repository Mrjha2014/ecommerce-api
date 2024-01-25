// productController.js
// This file serves as the controller for all product-related functionalities.
// It contains the business logic for handling products.

// Import required models
const Product = require('../models/Product');
const Counter = require('../models/Counter');

// Function to create a new product
const createProduct = async (req, res) => {
    try {
        // Increment the product ID counter
        const counter = await Counter.findByIdAndUpdate(
            'productId',
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );

        // Extract product details from the request body
        const { name, quantity } = req.body;

        // Create a new product with the incremented ID
        const product = new Product({
            id: counter.seq,
            name,
            quantity
        });

        // Save the new product to the database
        await product.save();

        // Send a success response with the created product's details
        res.status(201).json({ data: { product: { name: product.name, quantity: product.quantity } } });
    } catch (err) {
        // Send an error response if something goes wrong
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Function to list all products
const listProducts = async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find();

        // Prepare the products for the response
        const filteredProducts = products.map(product => ({
            id: product.id,
            name: product.name,
            quantity: product.quantity
        }));

        // Send a success response with the list of products
        res.status(200).json({ data: { products: filteredProducts } });
    } catch (err) {
        // Send an error response if something goes wrong
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fetch a single product by its ID
const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        // Fetch the product with the given ID from the database
        const product = await Product.findOne({ id });

        // If the product doesn't exist, send a 404 response
        if (!product) {
            return res.status(404).json({ data: { message: 'Product not found' } });
        }

        // Send a success response with the product's details
        res.status(200).json({ data: { product: { id: product.id, name: product.name, quantity: product.quantity } } });
    } catch (error) {
        // Send an error response if something goes wrong
        res.status(500).json({ message: 'Server error', error });
    }
};

// Function to delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        // Delete the product with the given ID from the database
        const product = await Product.findOneAndDelete({ id });

        // If the product doesn't exist, send a 404 response
        if (product) {
            res.status(200).json({ data: { message: 'Product deleted successfully' } });
        } else {
            res.status(404).json({ data: { message: 'Product not found' } });
        }
    } catch (err) {
        // Send an error response if something goes wrong
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Function to update the quantity of a product
const updateProductQuantity = async (req, res) => {
    try {
        const { id } = req.params;
        const { number } = req.query;

        // Update the quantity of the product with the given ID in the database
        const product = await Product.findOneAndUpdate(
            { id },
            { quantity: number },
            { new: true }
        );

        // If the product doesn't exist, send a 404 response
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
        // Send an error response if something goes wrong
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
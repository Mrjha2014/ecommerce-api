// This file contains the routes related to product operations.
// Each route delegates the business logic to a corresponding method in productController.

// Import required modules
const express = require('express');
const {
    createProduct,
    listProducts,
    getProductById,
    deleteProduct,
    updateProductQuantity
} = require('../controllers/productController');  // Import controller methods

const router = express.Router();

// POST route to create a new product
router.post('/create', createProduct);

// GET route to list all products
router.get('/', listProducts);

// Get a product by its ID
router.get('/:id', getProductById);

// DELETE route to delete a product by its ID
router.delete('/:id', deleteProduct);

// POST route to update the quantity of a product by its ID
router.post('/:id/update_quantity', updateProductQuantity);

// Catch-all 404 route for /products/*
router.use((req, res) => {
    res.status(404).json({ message: 'Product resource not found 404' });
});
// Export the router to be used in server.js
module.exports = router;

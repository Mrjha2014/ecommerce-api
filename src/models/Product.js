// This file defines the Product model for MongoDB using Mongoose.
// The Product model represents a product with an ID, name, and quantity.

// Import the Mongoose library
const mongoose = require('mongoose');

// Define the schema for the Product model
const ProductSchema = new mongoose.Schema({
    // id is a unique identifier for each product, it's required for each record
    id: { type: Number, required: true, unique: true },

    // name stores the name of the product and is required
    name: { type: String, required: true },

    // quantity stores the quantity of the product and is required
    quantity: { type: String, required: true },
});

// Export the Product model
module.exports = mongoose.model('Product', ProductSchema);

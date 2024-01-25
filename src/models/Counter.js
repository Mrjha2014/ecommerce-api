// This file defines the Counter model for MongoDB using Mongoose.
// The Counter model is used to maintain sequential numerical IDs for other models.

// Import the Mongoose library
const mongoose = require('mongoose');

// Define the schema for the Counter model
const CounterSchema = new mongoose.Schema({
    // _id will store the name of the other model whose IDs we're tracking
    _id: String,

    // seq will store the current highest ID used for the other model
    seq: Number
});

// Export the Counter model
module.exports = mongoose.model('Counter', CounterSchema);

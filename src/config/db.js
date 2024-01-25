// Import the mongoose module to interact with MongoDB
const mongoose = require('mongoose');

// Import the dotenv module to load environment variables from a .env file into process.env
require('dotenv').config();

// Retrieve the MongoDB connection string from the environment variables
const dbURI = process.env.MONGODB_URI;

// Define an asynchronous function to connect to MongoDB
const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB using the connection string
        // The options object passed as the second argument is to avoid deprecation warnings
        await mongoose.connect(dbURI, {
            useNewUrlParser: true, // Use the new URL string parser instead of the deprecated one
            useUnifiedTopology: true // Use the new topology engine instead of the deprecated one
        });
        // Log a success message if the connection is successful
        console.log('MongoDB Connected');
    } catch (error) {
        // Log an error message if the connection fails
        console.error('MongoDB Connection Failed', error);
        // Exit the process with a failure status (1) if the connection fails
        process.exit(1);
    }
};

// Export the connectDB function so it can be imported and used in other files
module.exports = connectDB;
// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');  //  product routes

// Load environment variables
require('dotenv').config();

// Initialize Express app
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define port from environment variables or default to 3000
const port = process.env.PORT || 3000;

// Connect to MongoDB database
connectDB();  // Call this function to establish database connection

// Route handling
app.use('/products', productRoutes);

// 404 catch-all route
app.use((req, res) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Import required modules
const express = require("express"); // Express.js for building the server
const bodyParser = require("body-parser"); // Body-parser for parsing the incoming request bodies
const connectDB = require("./config/db"); // Function to connect to the database
const productRoutes = require("./routes/productRoutes"); // Product routes

// Load environment variables from .env file
require("dotenv").config();

// Initialize Express app
const app = express();

// Middleware for parsing JSON and urlencoded form data
// bodyParser.json() parses incoming requests with JSON payloads
// bodyParser.urlencoded() parses incoming requests with urlencoded payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define port from environment variables or default to 3000
// process.env.PORT is useful when deploying to hosting providers like Heroku
const port = process.env.PORT || 3000;

// Connect to MongoDB database
// Call this function to establish database connection
connectDB();

// Route handling
// Use the product routes for all requests to /products
app.use("/products", productRoutes);

// Start the server
// The server starts listening for requests on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

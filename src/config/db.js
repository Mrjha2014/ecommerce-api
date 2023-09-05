const mongoose = require('mongoose');

// Load environment variables
require('dotenv').config();

// Connection URI
const dbURI = process.env.MONGODB_URI;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Failed', error);
    process.exit(1); // Exit process with failure
  }
};


module.exports = connectDB;

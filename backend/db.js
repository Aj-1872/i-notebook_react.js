// Import the Mongoose library
const mongoose = require('mongoose');

// Define the MongoDB URI (Uniform Resource Identifier) where your database is located
const mongoURI = "mongodb://127.0.0.1:27017/NoteBook";

// Create an asynchronous function to connect to MongoDB
const connectToMongo = async () => {
    try {
        // Use the `mongoose.connect` method to connect to the MongoDB database
        await mongoose.connect(mongoURI);

        // If the connection is successful, log a success message
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        // If there's an error while connecting, log the error message
        console.error("Error connecting to MongoDB:", error);
    }
};

// Export the `connectToMongo` function so it can be used in other parts of your application
module.exports = connectToMongo;

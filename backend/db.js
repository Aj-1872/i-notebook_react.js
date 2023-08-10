const mongoose = require("mongoose");
const mongoUrl = "mongodb://localhost:27017"; // Replace with your MongoDB URL

// Example function that returns a Promise
async function connectToMongo() {
    try {
        await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; // Re-throw the error for further handling
    }
}
module.exports = connectToMongo;
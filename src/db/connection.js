const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Database connection error:", error);
    process.exit(1); // Exit the process if the connection fails
  }
}

module.exports = connectDB;
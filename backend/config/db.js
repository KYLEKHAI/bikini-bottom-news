const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  console.log("Attempting to connect to MongoDB...");

  try {
    const conn = await mongoose.connect(mongoURI, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("ERROR: Failed to connect to MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;

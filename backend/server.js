// Importing required modules
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

//  Load environment variables
dotenv.config();

// Initialize server
const app = express();

// Connect to MongoDB
(async () => {
  await connectDB();

  // Start server (after MongoDB is connected)
  app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });
})();

// Initial route
app.get("/world-data", (req, res) => {
  res.json({ message: "API is working" });
});

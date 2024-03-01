require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

// Connecting the dbConnect.js file 
const connectDB = require('./dbConnect');

const app = express();
const port = process.env.PUBLIC_PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "pong" });
});



// Connect to MongoDB
connectDB()
  .then(() => {
    console.log("Connected to MongoDB");

    // If connecting is successful, then we do app.listen
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

module.exports = app;

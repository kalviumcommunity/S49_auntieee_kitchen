//connecting env file
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

//connecting the dbConnect.js file 
const connectDB =  require('./dbConnect');

const app = express();
const port = process.env.PUBLIC_PORT || 3000;


app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ message: "pong" });
});


//connect to MongoDB
connectDB();

//if connecting is successful then we do do app.listen ie: the port will run
connectDB().then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log("connected to port");
  });
});

module.exports = app;
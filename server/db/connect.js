const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();

const ConnectDB = async () => {

    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database connected")
    } catch (error) {
        console.error(error, "Problem connecting database");
    }
  
};

module.exports= ConnectDB

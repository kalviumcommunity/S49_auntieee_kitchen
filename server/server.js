import express from "express";
import routes from "./routes/routes.js";
import ConnectDB from "./db/connect.js";
import dotenv from 'dotenv';
const port =  process.env.PORT || 3000;
const app = express();
dotenv.config();

app.use("/api", routes);

const start = async () => {
    try{
        await ConnectDB();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();

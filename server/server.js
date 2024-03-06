const express = require("express");
const routes = require("./routes/routes.js");
const ConnectDB = require("./db/connect.js");
const dotenv = require("dotenv");

const port =  process.env.PORT;
const app = express();
dotenv.config();

app.use("/api", routes);

const start =  () => {
    try{
        ConnectDB().then(()=>{
            app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });
        })
      
    } catch (error) {
        console.log(error);
    }
}

start();


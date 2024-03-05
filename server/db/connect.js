import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const ConnectDB = () => {
    return mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

export default ConnectDB

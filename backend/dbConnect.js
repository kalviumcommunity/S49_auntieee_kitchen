const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = connectDB
  
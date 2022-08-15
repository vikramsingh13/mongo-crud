const mongoose = require('mongoose');
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to db: ${process.env.MONGO_URI}`);
    } catch (err){
        console.warn(`Mongoose connection error to db : ${err.message}`);
    }
};

module.exports = connectDB;
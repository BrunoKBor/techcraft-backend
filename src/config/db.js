const mongoose = require('mongoose');
require('dotenv').config();

console.log("MongoDB URI:", process.env.MONGO_URI); // Debugging

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in .env file!");
        }
        
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); // Exit process on failure
    }
  };

module.exports = connectDB;

const mongoose = require("mongoose")
require("dotenv").config();


 const connection = async () => {
    try {
      await mongoose.connect(process.env.mongourl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`MongoDB connected with server ${mongoose.connection.host}`);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  };

  module.exports=connection
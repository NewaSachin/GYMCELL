// const mongoose = require("mongoose");

// const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("MongoDB connected successfully");
//   } catch (err) {
//     console.log("MongoDb connection failed", err);
//   }
// };
// module.exports = connectDb;

const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDb;

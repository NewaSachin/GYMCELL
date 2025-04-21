const mongoose = require("mongoose");

const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");

const products = require("./data/products");

dotenv.config();

//Connect to Mongo DB database
mongoose.connect(process.env.MONGO_URL);

//Function to seed data
const seedData = async () => {
  try {
    //Clear existing data
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    //Create a default admin User
    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    //Assign the default userId to each product
    const userId = createdUser._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: userId };
    });

    //Insert the product into the database
    await Product.insertMany(sampleProducts);
    console.log("Product Data Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error("error seeding the data", error);
    process.exit(1);
  }
};

seedData();

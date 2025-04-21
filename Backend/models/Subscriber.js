const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  subscribedAt: {
    type: Date,
    defualt: Date.now(),
  },
});

module.exports = mongoose.model("Subsriber", subscriberSchema);

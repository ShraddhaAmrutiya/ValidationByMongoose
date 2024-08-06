const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [ /^[a-z0-9]+(?:\.[a-z0-9]+)*@[a-z0-9-]+\.(?:com|in|biz)$/, "Please enter a valid email address"],
  },
  age: {
    type: Number,
    min: [18, "Age must be at least 18"],
    max: [120, "Age cannot exceed 120"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

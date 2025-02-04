const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String], // Array of strings for tags
    default: [],
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Price should not be negative
  },
  stock: {
    type: Number,
    required: true,
    min: 0, // Stock should not be negative
  },
  images: {
    type: [String], // Array of strings to store image paths
    required: true,
  },
  user: { // To associate the product with the user who created it
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference the User model
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
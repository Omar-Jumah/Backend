const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  ad: { type: String },
  hashtags: { type: String },
  category: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
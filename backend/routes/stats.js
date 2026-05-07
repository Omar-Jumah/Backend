const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    res.json({
      totalProducts,
      savedHours: totalProducts * 2,
      engagement: "92%"
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
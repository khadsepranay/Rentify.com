const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sub_category: {
    type: String,
    required: true,
  },
  price1: {
    type: Number,
    required: true,
  },
  price2: {
    type: Number,
    required: true,
  },
  price3: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  delivered_in: {
    type: Number,
    required: true,
  },
});

const ProductModel = mongoose.model("Products", productSchema);

module.exports = ProductModel;

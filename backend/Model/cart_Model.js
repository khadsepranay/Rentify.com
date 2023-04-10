const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  tenure: {
    type: Number,
  },
},{versionKey:false});

const CartModel = mongoose.model("Carts", cartSchema);

module.exports = { CartModel };

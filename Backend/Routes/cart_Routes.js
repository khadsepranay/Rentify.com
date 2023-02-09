require("dotenv").config();
const express = require("express");
const { CartModel } = require("../Model/cart_Model");
const ProductModel = require("../Model/product_Model");

const { userAuthMiddleware } = require("../Middleware/userAuthMiddleware");

const cart = express.Router();

cart.get("/", userAuthMiddleware, async (req, res) => {
  const user = req.body.user;
  try {
    let data = await CartModel.find({ user }).populate(["user", "product"]);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

cart.get("/add/:id", userAuthMiddleware, async (req, res) => {
  const user = req.body.user;
  const product = req.params.id;
  let price = req.headers.price;
  let tenure = req.headers.tenure;
  let CartItem = await CartModel.findOne({ user, product });
  let Product = await ProductModel.findById(product);
  if (CartItem) {
    res.send("already added to cart");
  } else {
    try {
      if (Product.quantity > 0) {
        let cartProduct = await CartModel.create({
          user,
          product,
          quantity: 1,
          price,
          tenure,
        });
        newquantity = Product.quantity - 1;
        await ProductModel.findByIdAndUpdate(product, {
          quantity: newquantity,
        });
        res.send("Product Added To Cart");
      } else {
        res.send(`Product with id:${product} is out of stock`);
      }
    } catch (error) {
      res.send(error);
    }
  }
});

cart.get("/cartquantityadd/:id", userAuthMiddleware, async (req, res) => {
  let user = req.body.user;
  let product = req.params.id;
  let CartData = await CartModel.find().populate(["user", "product"]);
  try {
    let Product = await ProductModel.findById(product);
    if (Product.quantity > 0) {
      let productquantity = Product.quantity - 1;
      await ProductModel.findByIdAndUpdate(
        product,
        { quantity: productquantity },
        { new: true }
      );
      let CartItem = await CartModel.findOne({ user, product });
      let cartquantity = CartItem.quantity + 1;
      await CartModel.findOneAndUpdate(
        { user, product },
        { quantity: cartquantity },
        { new: true }
      );
      CartData = await CartModel.find({ user }).populate(["user", "product"]);
      console.log(CartData);
      res.send(CartData);
    } else {
      res.send(CartData);
    }
  } catch (err) {
    res.send(err);
  }
});

cart.get("/cartquantityreduce/:id", userAuthMiddleware, async (req, res) => {
  let product = req.params.id;
  let user = req.body.user;
  let CartItem = await CartModel.findOne({ product, user });
  console.log(CartItem.quantity);
  if (CartItem.quantity < 1) {
    res.send("Cannot decrease");
  } else {
    try {
      let Product = await ProductModel.findById(product);
      let productquantity = Number(Product.quantity) + 1;
      await ProductModel.findByIdAndUpdate(
        product,
        { quantity: productquantity },
        { new: true }
      );
      let cartquantity = CartItem.quantity - 1;
      await CartModel.findOneAndUpdate(
        { user, product },
        { quantity: cartquantity },
        { new: true }
      );
      let CartData = await CartModel.find({ user }).populate([
        "user",
        "product",
      ]);
      res.send(CartData);
    } catch (err) {
      res.send(err);
    }
  }
});

cart.delete("/delete/:id", userAuthMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    let CartItem = await CartModel.findById(id);
    let product = CartItem.product._id;
    let Product = await ProductModel.findById(product);
    let cartquantity = CartItem.quantity;
    let productquantity = Product.quantity;
    let totalquantity = cartquantity + productquantity;
    await ProductModel.findByIdAndUpdate(
      product,
      { quantity: totalquantity },
      { new: true }
    );
    await CartModel.findByIdAndDelete(id);
    let CartData = await CartModel.find().populate(["user", "product"]);
    res.send(CartData);
  } catch (err) {
    res.send(err);
  }
});

cart.get("/isadded/:id", userAuthMiddleware, async (req, res) => {
  let user = req.body.user;
  let product = req.params.id;
  let Product = await CartModel.findOne({ product, user });
  console.log(Product);
  try {
    if (Product) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    res.send(false);
  }
});

cart.delete("/success", userAuthMiddleware, async (req, res) => {
  let user = req.body.user;
  try {
    let Cart = await CartModel.deleteMany({ user });
    res.send("Order Successfully Placed");
  } catch (err) {
    res.send(err);
  }
});

module.exports = { cart };

require("dotenv").config();
const express = require("express");
let ProductModel = require("../Model/product_Model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const product = express.Router();

product.get("/", async (req, res) => {
  try {
    let Products = await ProductModel.find({ quantity: { $gt: 0 } });
    res.send(Products);
  } catch (err) {
    res.send(err);
  }
});

product.get("/:category/:sub_category", async (req, res) => {
  try {
    let { category, sub_category } = req.params;
    console.log(category, sub_category);
    if (category != "undefined" && sub_category != "undefined") {
      let Products = await ProductModel.find({
        category,
        sub_category,
        quantity: { $gt: 0 },
      });
      res.send(Products);
    } else {
      let Products = await ProductModel.find();
      res.send(Products);
    }
  } catch (err) {
    res.send(err);
  }
});

product.get("/:category/:sub_category/:id", async (req, res) => {
  let { category, sub_category, id } = req.params;
  let Product = await ProductModel.findOne({ category, sub_category, _id: id });
  res.send(Product);
});

module.exports = { product };

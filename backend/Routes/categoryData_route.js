let express = require("express");
let category = express.Router();

let CategoryModel = require("../Model/categoryData_Model");

category.get("/:category", async (req, res) => {
  try {
    let category = req.params.category;
    console.log(category);
    let CategoryData = await CategoryModel.find({ category });
    res.send(CategoryData);
  } catch (err) {
    res.send(err);
  }
});

module.exports = category;

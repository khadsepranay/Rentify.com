let mongoose = require("mongoose");

let CategorySchema = mongoose.Schema({
  image: String,
  name: String,
  category: String,
  sub_category: String,
});

let CategoryModel = mongoose.model("product_categories", CategorySchema);

module.exports = CategoryModel;

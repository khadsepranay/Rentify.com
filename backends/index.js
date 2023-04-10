require("dotenv").config();
const express = require("express");
const connect = require("./Config/db");
const { userRegister } = require("./Routes/user_Routes");
const { product } = require("./Routes/product_Routes");
const { cart } = require("./Routes/cart_Routes");
let Port = process.env.Port;

const cors = require("cors");
const category = require("./Routes/categoryData_route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRegister);

app.use("/product", product);

app.use("/cart", cart);

app.use("/category", category);

app.listen(Port, async () => {
  try {
    await connect();
    console.log(`Connected to the Data Base`);
  } catch (error) {
    console.log(` errror is ====> ${error}`);
  }
  console.log(`Server is running on 8000`);
});

const mongoose = require("mongoose");

const connect = () =>
  mongoose.connect(
    "mongodb+srv://pranitkhadse:pranit@cluster0.hqcdxvk.mongodb.net/Rentify?retryWrites=true&w=majority"
  );

module.exports = connect;

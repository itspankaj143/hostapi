const mongoose = require("mongoose");
const url = process.env.Url;
// const productjson = require("../product.json");
// // const connectdb = require("./config/dbconnect");
// const product = require("../models/productSchema");

const dbconnect = async () => {
  await mongoose.connect(url);
  //   await product.deleteMany({});
  //   // ; // remove all data from collection
  //   await product.create(productjson);
  //   console.log("success");
};
module.exports = dbconnect;

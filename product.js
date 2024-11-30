const productjson = require("./product.json");
const connectdb = require("./config/dbconnect");
const product = require("./models/productSchema");

const connectdbone = async () => {
  await connectdb();
  console.log("connect db");
  await product.deleteMany({});
  // ; // remove all data from collection
  await product.create(productjson);
  console.log("success");
};
// module.exports = connectdb;
connectdbone();

const Product = require("../models/productSchema");
const getallproduct = async (req, res) => {
  console.log(req.query);
  const { company, name, featured, sort } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (featured) {
    queryObject.featured = featured;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  //   let sortOptions = {};
  //   if (sort) {
  //     console.log(sort);
  //     sortOptions[sort] = 1;
  //   } else {
  //     sortOptions = { name: 1 };
  //   }
  //     console.log("sort", sortOptions);
  let apiData = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  let page = Number(req.query.page);
  let limit = Number(req.query.limit);

  // page = 2;
  // limit = 3;
  // skip =  1 * 3 = 3
  let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit);

  try {
    const products = await apiData;
    res.status(200).json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
  //   res.send("getallproduct");
};
module.exports = { getallproduct };

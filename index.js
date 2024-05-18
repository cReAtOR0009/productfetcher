const express = require("express");
const { Parser } = require("json2csv");
const fs = require("fs");
const app = express();
const PORT = 4001;
const crawler = require("./crawler");

const myMiddleware = (req, res, next) => {
  console.log("Server Request");
  next();
};

app.get("/", myMiddleware, (req, res, next) =>
  res.send("Nodejs fuelPriceapi Server is Running")
);

const flatten = async (array) => {
  const flat = array
    .map((product) => {
      return product.productTitle.map((title, index) => {
        return {
          mainTitle: product.title,
          productTitle: title,
          price: product.prices || '',
          details: product.details,
          image: product.images || '',
        }; 
      });
    })
    .flat();

    console.log("flattened array:", flat)  

    return flat
};

const fields = [
  "mainTitle",
  "productTitle",
  "prices",
  "details",
  "images",
  // "condition",
  // "price",
  // "link",
  // "image_link",
  // "brand",
];
const opts = { fields };

app.get("/getproducts", async (req, res) => {
  let response = {};
  try {
    const products = await crawler.getProduct();
    const flattenData = await flatten(products)
    const parser = new Parser(opts);
    const csv =await parser.parse(flattenData); 
    await fs.writeFileSync("products.csv", csv);
    console.log("CSV file has been written successfully");
    // console.log("products:", products);
    response.status = 200;
    response.message = "all products fetched Succesfully";  
    response.data = products;
  } catch (error) {
    console.log("error from server:", error);
  }
  return res.status(response.status).send(response); 
});

app.listen(PORT, () => {
  console.log(`product Bot running on ${PORT}`);
});

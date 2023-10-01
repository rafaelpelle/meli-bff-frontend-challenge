const express = require("express");
const productRouter = require("./product");

const app = express();

app.use("/items", productRouter);

module.exports = app;

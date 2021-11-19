const path = require('path');

const express = require('express');

const dir = require("../helpers/path")

const router = express.Router();

const productsData = require("./admin")

router.get('/', (req, res, next) => {
  res.render("shop")
  // console.log(productsData.products);
  // res.sendFile(path.join(dir, 'views', 'shop.html'));
});

module.exports = router;

const path = require('path');

const express = require('express');

const dir = require("../helpers/path")

const router = express.Router();


const products = []

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // normal html file send as response
  // res.sendFile(path.join(dir, 'views', 'add-product.html'));
  res.render('add-product') //response through compile pug engine
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title})
  // console.log(req.body);
  res.redirect('/');
});

module.exports = {
  router: router,
  products: products
}

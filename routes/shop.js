const express = require('express');

const productsData = require('../controllers/products')

const router = express.Router();

router.get('/', productsData.getProducts);

module.exports = router;
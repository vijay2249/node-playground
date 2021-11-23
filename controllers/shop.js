const Product = require("../models/product")

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products =>{
    res.render("shop/productList", {
      data: products, 
      title: "All Products", 
      path: '/products'
    })
  })
}

exports.getIndex = (req, res, next) =>{
  Product.fetchAll(products =>{
    res.render("shop/index", {
      data: products, 
      title: "Shop", 
      path: '/shop'
    })
  })
}

exports.getCart = (req, res, next) =>{
  res.render('shop/cart', {
    path: '/cart',
    title: 'Your Cart'
  })
}

exports.getCheckout = (req, res, next) =>{
  res.render('shop/checkout', {
    title: 'Checkout',
    path: '/checkout'
  })
}
const Product = require("../models/product")

exports.getAddProducts = (req, res, next)=>{
  res.render("add-product", {
    title: "Add Product",
    path: '/admin/add-product'
  })
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products =>{
    res.render("shop", {
      data: products, 
      title: "Shop List", 
      path: '/shop'
    })
  })
}
const Product = require("../models/product")

exports.getAddProducts = (req, res, next)=>{
  res.render("admin/add-product", {
    title: "Add Product",
    path: '/admin/add-product'
  })
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()
  res.redirect('/');
}

exports.getProducts = (req, res, next) =>{
  Product.fetchAll(products =>{
    res.render("admin/adminProductsList", {
      data: products, 
      title: "Admin Products", 
      path: '/admin/products'
    })
  })
}
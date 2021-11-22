const products = []


exports.getAddProducts = (req, res, next)=>{
  res.render("add-product", {
    title: "Add Product",
    path: '/admin/add-product'
  })
}

exports.postAddProduct = (req, res, next) => {
  products.push({title: req.body.title})
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    data: products, 
    title: "Shop List", 
    path: '/shop'
  })
}
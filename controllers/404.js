exports.get404Page = (req, res, next)=>{
  res.render("404", {title: "Error found", path: '/404'})
}
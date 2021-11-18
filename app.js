// core modules
// const http = require("http")

// third party modules
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended: false}))

// app.use((req, res, next)=>{
//   console.log("This is first app.use function");
//   next(); // used to execute the next app function the runs the logic or routing or anything else
// })
// app.use((req, res, next)=>{
//   console.log("This is second app.use function");
//   // next();
//   res.send("<h1>Hello there</h1>")
// })

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

app.use("/admin", adminRoutes)
app.use(shopRoutes)

app.use((req, res, next)=>{
  res.status(404).send("<h1>Page not found</h1>")
})

app.listen(3000, ()=>console.log("Server started in port 3000")) //does the same work as the below two lines
// const server = http.createServer(app)
// server.listen(3000, ()=>{console.log("Server started in port 3000");})
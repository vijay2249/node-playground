// core modules
// const http = require("http")

// third party modules
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()


// pug engine setup 
// app.set("view engine", "pug")

app.set("view engine", "ejs") //ejs engine setup

// setting the views folder
app.set("views", "views") //the templates are found the 2nd argument named folder in this line of code


//configurations for the app
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname +"/public"))

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

app.use("/admin", adminRoutes.router)
app.use(shopRoutes)

app.use((req, res, next)=>{
  // res.status(404).sendFile(__dirname+"/views/404.html")
  res.render("404", {title: "Error found"}) //response of html page using pug engine
})

app.listen(3000, ()=>console.log("Server started in port 3000")) //does the same work as the below two lines
// const server = http.createServer(app)
// server.listen(3000, ()=>{console.log("Server started in port 3000");})
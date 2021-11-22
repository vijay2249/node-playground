const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()

app.set("view engine", "ejs")
app.set("views", "views")

//configurations for the app
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname +"/public"))

// routes import
const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

// controllers import
const handleErrorPage = require("./controllers/404")

app.use("/admin", adminRoutes)
app.use(shopRoutes)

app.use(handleErrorPage.get404Page)

app.listen(3000, ()=>console.log("Server started in port 3000"))
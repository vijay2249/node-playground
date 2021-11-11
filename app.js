// core modules
const http = require("http")

// third party modules
const express = require("express")

const app = express()

app.use((req, res, next)=>{
  console.log("This is first app.use function");
  next(); // used to execute the next app function the runs the logic or routing or anything else
})

app.use((req, res, next)=>{
  console.log("This is second app.use function");
  next();
})

const server = http.createServer(app)

server.listen(3000, ()=>{
  console.log("Server started in port 3000");
})
const http = require("http")

const requestHandler = require("./routes-1")

const server = http.createServer(requestHandler.routesHandler)

server.listen(3000, ()=>{
  console.log("Server started in port 3000");
})
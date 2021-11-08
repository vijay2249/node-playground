const http = require("http")

const server = http.createServer((req, res)=>{
  console.log("URL:");
  console.log(req.url);
  console.log("Method:");
  console.log(req.method);
  console.log("Headers:");
  console.log(req.headers);
  res.setHeader("Content-Type", 'text/html')
  res.write("<body><h1>This is response from server</h1></body>")
  res.end()
  // process.exit()
})

server.listen(3000, ()=>{
  console.log("Server started in port 3000");
})
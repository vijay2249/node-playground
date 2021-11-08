const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{
  // console.log(req.url, req.method, req.headers);
  const url = req.url
  const method = req.method
  if(url === "/"){
    console.log("inside the / route");
    res.write("<body><h1>This is response from server</h1></body>")
    res.write("<body><form action='/message' method='POST'><input name='msg' type='text'><button type='submit'>submit</button></form></body>")
    return res.end()
  }
  if(url === "/message" && method === "POST"){
    console.log("Inside the /message route");
    fs.writeFileSync("msg.txt", "DUMMY text")
    res.statusCode = 302
    res.setHeader("Location", "/")
    return res.end()
  }
  res.setHeader("Content-Type", 'text/html')
  res.write("<body><h1>This is response from server</h1></body>")
  res.end()
  // process.exit()
})

server.listen(3000, ()=>{
  console.log("Server started in port 3000");
})
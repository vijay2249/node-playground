const http = require("http")

const server = http.createServer((req, res)=>{
  console.log(req.url, req.method, req.headers);
  const url = req.url
  if(url === "/"){
    res.write("<body><h1>This is response from server</h1></body>")
    res.write("<body><input action='/message' method='POST' name='msg' type='text'><button type='submit'>submit</button></body>")
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
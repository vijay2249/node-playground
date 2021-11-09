const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{
  // console.log(req.url, req.method, req.headers);
  const url = req.url
  const method = req.method
  if(url === "/"){
    res.write("<body><h1>This is response from server</h1></body>")
    res.write("<body><form action='/message' method='POST'><input name='msg' type='text'><button type='submit'>submit</button></form></body>")
    return res.end()
  }
  else if(url === "/message" && method === "POST"){
    const body_data = []
    req.on('data', (chunk)=>{
      console.log(chunk);
      body_data.push(chunk)
    })
    return req.on('end', ()=>{
      const data = Buffer.concat(body_data).toString()
      console.log(data);
      const message = data.split("=")[1]
      // fs.writeFileSync("msg.txt", message)
      // res.statusCode = 302
      // res.setHeader("Location", "/")
      // return res.end()
      fs.writeFile("msg.txt", message, err=>{
        if(!err){
          res.statusCode = 302
          res.setHeader("Location", "/")
          return res.end()
        }
      })
    })
  }
  res.setHeader("Content-Type", 'text/html')
  res.write("<body><h1>This is response from server</h1></body>")
  res.end()
  // process.exit()
})

server.listen(3000, ()=>{
  console.log("Server started in port 3000");
})
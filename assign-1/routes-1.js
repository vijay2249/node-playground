const handleRequest = (req, res) =>{
  const {url, method} = req
  if(url === "/"){
    res.write("<body><h1>Hello there welcome</h1><br><form action='/create-user' method='POST'><input name='msg' type='text'><button type='submit'>submit</button></form></body>")
    return res.end()
  }
  else if(url === '/users'){
    res.write("<body><ul><li>user1</li><li>user2</li></ul></body>")
    return res.end()
  }
  else if(url === "/create-user" && method === "POST"){
    const body_data = []
    req.on('data', (chunk)=>{
      console.log(chunk);
      body_data.push(chunk)
    })
    return req.on('end', ()=>{
      const data = Buffer.concat(body_data).toString()
      console.log("Use-Input ===>",data.split("=")[1])
      res.statusCode = 302
      res.setHeader("Location", "/")
      return res.end()
    })
  }
  res.setHeader("Content-Type", 'text/html')
  res.write("<body><h1>This is response from server</h1></body>")
  res.end()
}

module.exports = {
  routesHandler : handleRequest,
  text: "Some dummy text"
}

// modules.exports.routesHandler = handleRequest
// if there is only one return function then this is preferred
// module.exports = handleRequest
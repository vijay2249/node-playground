const fs = require('fs')
const path = require('path')

const filePath = path.join(path.dirname(require.main.filename), "data", 'products.json')

const productsDataFromFile = callBack =>{
  fs.readFile(filePath, (err, content)=>{
    if(err) callBack([])
    else callBack(JSON.parse(content))
  })
}

module.exports = class Product{
  constructor(title){
    this.title = title
  }
  save(){
    productsDataFromFile(products =>{
      products.push(this)
      fs.writeFile(filePath, JSON.stringify(products), (err)=>{
        console.log(err);
      })
    })
  }

  //the below fetchAll method contains async readFile function which just contains the callback function when the contents in file are read
  // since that is async, before the call back execution the fetchAll method return undefined as there are no return statements in outer loop
  // solution 1
  // add a callback to the fetchAll method as a parameter function 

  static fetchAll(callBack){
    productsDataFromFile(callBack)
  }
}
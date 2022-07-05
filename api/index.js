const http =  require('http')
const URL = require('url')
const fs = require('fs')
const data = require('./urls.json')
const path = require('path')

function writeFile(cb) {
  fs.writeFile(
    path.join(__dirname, "urls.json"), 
    JSON.stringify(data, null, 2),
    err => {
      if(err) throw err
      cb(JSON.stringify({message: "ok"}))
    }
  )
}

http.createServer((req,res) => {

  const { name, url, del } = URL.parse(req.url, true).query

  res.writeHead(200, {'Access-Control-Allow-Origin': '*'})

  // http://localhost:3000
  if(!name || !url) 
    return res.end(JSON.stringify(data))
  
  // http://localhost:3000/?name=YouTube&url=http://youtube.com&del=1
  if(del){
    data.urls = data.urls.filter(item => String(item.url) !== String(url))
    return writeFile( (message) => res.end(message)) 
  }
  
  // http://localhost:3000/?name=Youtube&url=http://youtube.com
  data.urls.push({ name, url })
  return writeFile( (message) => res.end(message))

}).listen(3000, () => console.log("Servidor ativado na porta 3000") )
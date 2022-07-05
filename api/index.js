const http =  require('http')
const URL = require('url')
const data = require('./urls.json')

http.createServer((req,res) => {

  res.end(JSON.stringify(data))

}).listen(3000, () => console.log("Servidor ativado") )
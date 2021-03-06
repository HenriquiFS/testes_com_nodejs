const http =  require('http')
const fs = require('fs')
const path = require('path')

/*
http.createServer((req,res) => {
  if(req.url === '/'){
    return res.end('<h1> Página Inicial </h1>')
  }
  if(req.url === '/contatos'){
    return res.end('<h1> Contatos </h1>')
  }
}).listen(5000, () => console.log("Servidor ativado") )
*/

http.createServer((req,res) => {

  const file = req.url === '/' ? 'index.html' : req.url
  const filePath = path.join(__dirname, 'public', file)
  const extname = path.extname(filePath)

  const allowedFileTypes = ['.html','.css','.js']
  const allowed = allowedFileTypes.find(item => item == extname)

  if(!allowed) return

  fs.readFile(
    filePath,
    (err, content) => {
      if(err) throw err
      res.end(content)
    }
  )


}).listen(5000, () => console.log("Servidor ativado na porta 5000") )
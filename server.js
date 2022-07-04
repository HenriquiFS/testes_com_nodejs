const http =  require('http')

http.createServer((req,res) => {
  if(req.url === '/'){
    return res.end('<h1> Página Inicial </h1>')
  }
  if(req.url === '/'){
    return res.end('<h1> Contatos </h1>')
  }
}).listen(5000, () => console.log("Servidor ativado") )
var http =require('http');
var atende = function(req,res){
    console.log('--------------------------------')
    console.log(req)
    res.write('<h1>helow')
    res.end()
}

var server = http.createServer(atende)
var rodar = function(){
    console.log('servidor rodando')
}
server.listen(3000,rodar)
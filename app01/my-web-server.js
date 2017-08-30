var http = require('http')

http.createServer(function ( req, res ) { // req = requisição, res = resposta

    res.writeHead( 200, { 'Content-Type': 'text/plain' } );
    res.end( 'Hello World\n' );
}).listen(8080) 

console.log( 'Servidor rodando na porta 8080' )
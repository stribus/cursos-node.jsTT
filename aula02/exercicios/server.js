/*
    Criar um servidor que responda duas rotas com arquivos
    .HTML de uma pasta /views:
    - /      --> index.html
    - /sobre --> sobre.html
*/

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var arquivo;
    if (req.url === '/') {
        arquivo = './views/index.html';
    } else if (req.url === '/sobre') {
        arquivo = './views/sobre.html';
    } else {
        res.writeHeader(404, { "Content-Type": "text/html; charset=utf-8" });
        res.write('Página não encontrada');
        res.end();
        return
    }

    fs.readFile(arquivo, function (err, data) {
        res.writeHeader(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write(data.toString());
        res.end();
    });

}).listen(3000, function() {
    console.log('rodando na porta 3000');
});
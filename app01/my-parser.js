// Carregando o módulo fs (filesystem)
var fs = require('fs');
var Parser = require('./parser');


// Leia o conteúdo do arquivo para a memória
fs.readFile('exemple.log.txt', function (err, loData) {

    // Se um erro ocorrer, será lançada uma
    // exceção, e a aplicação irá ser encerrada
    if (err) {
        throw err;

    }


    // logData é um Buffer, converta-o para string
    var text = loData.toString();
    var parser = new Parser();
    var results = parser.parser(text);

    console.log(results);

});
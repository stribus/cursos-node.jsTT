// Carregando o módulo fs (filesystem)
var fs = require('fs');


// Leia o conteúdo do arquivo para a memória
fs.readFile('exemple.log.txt', function (err, loData) {

    // Se um erro ocorrer, será lançada uma
    // exceção, e a aplicação irá ser encerrada
    if (err) {
        throw err;

    }


    // logData é um Buffer, converta-o para string
    var text = loData.toString();
    var results = {};

    // Quebrando o arquivo em linhas
    var lines = text.split('\n');

    lines.forEach(function (line) {
        var parts = line.split(' '); // "timestamp letra numero"
        var letter = parts[1];
        var count = parseInt(parts[2]);

        if (!results[letter]) {
            results[letter] = 0;
        }

        results[letter] += parseInt(count);
    });

    console.log(results);

});
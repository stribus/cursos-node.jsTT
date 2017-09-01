var Parser = function () {
};

Parser.prototype.parse = function (texto) {
    var result = {};
    
    var linhas = texto.split('\n');

    linhas.forEach(function (linha) {
        var partes = linha.split(' '); // "data letra numero"
        var letra = partes[1];
        var numero = parseInt(partes[2]);

        if (!result[letra]) {
            result[letra] = 0; // result.a = 0;
        }

        result[letra] += numero;
    });
    return result;
};

module.exports = Parser;
var fs = require('fs');
var Parser = require('./parser');

fs.readFile('example-log.txt', (err, data) => {
    if (err) {
        throw err;
    }

    var texto = data.toString();
    
    var parser = new Parser();
    var result = parser.parse(texto);

    console.log(result);
});
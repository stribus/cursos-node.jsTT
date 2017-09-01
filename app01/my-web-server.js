var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/') {
        fs.readFile(__dirname + '/index.html', function(err, data) {
            res.write(data.toString());
            res.end();
            return;
        });
    } else {
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            console.log(body);
        // at this point, `body` has the entire request body stored in it as a string
        });

        res.write('not found');
        res.end();
    }
    
}).listen(8080);

console.log('servidor rodando na porta 8080');
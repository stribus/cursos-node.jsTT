var express = require('express');
var app = express();
var clientes = require('./clientes');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var mongo;
MongoClient.connect('mongodb://localhost:27017/local', (err, db) => {
    mongo = db;
});

app.use(bodyParser.json());

app.use('/clientes', clientes);

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.post('/', (req, res) => {
    var { nome } = req.body;
    res.send('POST recebido em com nome: ' + nome);
});

app.put('/users', (req, res) => {
    res.send('PUT recebido em /users');
});

app.delete('/users', (req, res) => {
    res.send('DELETE recebido em /users');
});

app.route('/users')
    .get((req, res) => {
        mongo.collection('users').find({}).toArray((err, result) => {
            res.send(result);
        });
    })
    .post((req, res) => {
        var { nome } = req.body;
        var user = { nome };

        mongo.collection('users').insertOne(user, (err, r) => {
            if (err) {
                res.sendStatus(500);
            }
            res.sendStatus(201);
        });
    });

app.all('/secret', (req, res, next) => {
    console.log('acessando /secret...');
    next();
});

app.get('/secret', (req, res) => {
    res.send('Secret page!');
});

app.use('/admin', (req, res, next) => {
    console.log('acessando área de admin...');
    // fazer validação de login...
    var senha = req.query.senha;

    if (senha === '123') {
        next();
    } else {
        res.sendStatus(403);
    }
});

app.get('/admin', (req, res) => {
    res.send('Página de Admin!');
});

app.use('/', express.static('./public'));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...');
});
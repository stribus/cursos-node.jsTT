const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
let mongo;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Clientes Server');
});

app.get('/clientes', (req, res) => {
    mongo.collection('clientes').find().toArray((err, clientes) => {
        res.json(clientes);
    });
});

app.post('/clientes', (req, res) => {
    const { nome, email, cidade } = req.body;
    const cliente = { nome, email, cidade };

    mongo.collection('clientes').insertOne(cliente, (err, r) => {
        if (err) {
            res.sendStatus(500);
        }
        res.sendStatus(201);
    });
});

app.listen(3000, () => {
    console.log('Server rodando na porta 3000');

    mongoClient.connect('mongodb://localhost:27017/local', (err, db) => {
        mongo = db;
        console.log('Mongo conectado...');
    });
});
var express = require('express');
var Funcionario = require('./models/funcionario');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();

app.use(cors());

var url = 'mongodb://localhost:27017/local';
mongoose.connect(url);

// var f1 = new Funcionario({
//     nome: 'João',
//     email: 'joao@gmail.com',
//     profissao: 'developer',
//     telefone: '999999999'
// });
// var f2 = new Funcionario({
//     nome: 'Maria',
//     email: 'maria@gmail.com',
//     profissao: 'diretora',
//     telefone: '888888888'
// });
// f1.save();
// f2.save();

app.route('/funcionarios')
    .get((req, res) => {
        Funcionario.find((err, funcionarios) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.json(funcionarios);
            }
        });
    })
    .post((req, res) => {
        res.send('POST...');
    })
    .put((req, res) => {
        res.send('PUT...');
    })
    .delete((req, res) => {
        res.send('DELETE...');
    });

app.listen(3000, () => {
    console.log('Server funcionários rodando em localhost:3000...');
});
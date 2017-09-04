var express = require('express');
//var Funcionario = require('./models/funcionario');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();
var routes = require('.routes');


app.use(cors());

var url = 'mongodb://localhost:27017/local';
mongoose.connect(url);



app.route('/funcionarios',routes);
    

app.listen(3000, () => {
    console.log('Server funcionários rodando em localhost:3000...');
});
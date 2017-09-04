var mongoose = require('mongoose');

var Funcionario = mongoose.model('Funcionario', {
    id:String,
    nome: String,
    profissao: String,
    email: String,
    telefone: String
});

module.exports = Funcionario;
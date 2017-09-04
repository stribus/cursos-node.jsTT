var express = require('express');
var Funcionario = require('./models/funcionario');
var router = express.Router();

router.get('/',(req,res)=>{
    console.log('xxxxx');
    Funcionario.find((err, funcionarios) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.json(funcionarios);
        }
    });
})


router.post('/',(req,res)=>{
    const {nome,email,telefone,profissao} = req.body;

    const novoFunc = new Funcionario( {nome,email,telefone,profissao});

    novoFunc.save((err,result)=>{
        if(err){
            res.sendStatus(500)
        }else {
            res.sendStatus(201)
        }
    })
})

module.exports = router;
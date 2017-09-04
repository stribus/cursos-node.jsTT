var express = require('espress');
var Funcionario = require('./models/funcionario');
var router = express.Router();

router.get((req,res)=>{
    Funcionario.find((err, funcionarios) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.json(funcionarios);
        }
    });
})
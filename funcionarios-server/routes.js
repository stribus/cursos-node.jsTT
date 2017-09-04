var express = require('express');
var Funcionario = require('./models/funcionario');
var router = express.Router();

router.get('/',(req,res)=>{
    Funcionario.find((err, funcionarios) => {
        if (err) {
            res.sendStatus(500);
        } else {
            funcionarios.forEach(f=>{f.id = f._id})
            res.json(funcionarios);
        }
    });
})

router.delete('/:id',(req,res)=>{
    const{ id} = req.params;
    Funcionario.findById(id,(err,func)=>{
        func.remove((err,result)=>{
            res.sendStatus(200);
        })
    })
})
router.get('/:id',(req,res)=>{
    const{ id} = req.params;
    Funcionario.findById(id,(err,func)=>{
        res.json(func);
    })
})

router.put('/',(req,res)=>{
    const {_id,nome,email,telefone,profissao} = req.body;
    Funcionario.findById(_id,(err,func)=>{
        func.update({nome,email,telefone,profissao},(err,r)=>{
            res.sendStatus(200)
        })
    })
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
var express = require('express');
var app = express();
app.get('/',  (req, res) =>{
    res.send('hellow, express!')

})

app.post('/',(req,res)=>{
    res.send('Post recebido em /')
})

app.put('/users',(req,res)=>{res.send('PUT recebido em /users')})
app.delete('/users',(req,res)=>{res.send('DELETE recebido em /users')})
app.all('/secret',(req,res,next)=>{console.log('acessando secretamente');next()})
app.get('/secret',(req,res)=>{res.send('acessando secretamente')})

app.listen(3000,()=> {
    console.log('servidor rodando na porta 3000')
})
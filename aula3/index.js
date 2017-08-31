var express = require('express');
var app = express();
app.get('/',  (req, res) =>{
    res.send('hellow, express!')

})

app.listen(3000,()=> {
    console.log('servidor rodando na porta 3000')
})
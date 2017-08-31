var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('hellow, express!')

})

app.listen(3000,function () {
    console.log('servidor rodando na porta 3000')
})
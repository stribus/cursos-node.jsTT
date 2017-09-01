var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('GET clientes...');
});

router.get('/about', (req, res) => {
    res.send('GET clientes/about...')
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('admin 이후 url');
});

router.get('/products', (request, response) => {
    response.send('admin products');
});

module.exports = router;
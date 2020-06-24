const express = require('express');
const { renderString } = require('nunjucks');
const { response, request } = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('admin 이후 url');
});

router.get('/products', (request, response) => {
    //response.send('admin products');
    response.render('admin/products.html');
});

router.get('/products/write', (request, response) => {
    response.render('admin/write.html');
});

router.post('/products/write', (request, response) => {
    response.send(request.body);
});

module.exports = router;
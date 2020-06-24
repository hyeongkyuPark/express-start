const express = require('express');
const { renderString } = require('nunjucks');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('admin 이후 url');
});

router.get('/products', (request, response) => {
    //response.send('admin products');
    response.render('admin/products.html', {
        message: 'asd'
    });
});

module.exports = router;
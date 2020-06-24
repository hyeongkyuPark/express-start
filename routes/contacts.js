const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('contacts 이후 url');
});

router.get('/list', (request, response) => {
    response.send('contacts list');
});

module.exports = router;
const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');
const { response } = require('express');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true,
    express : app
});

//미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/uploads', express.static('uploads'));

app.use((request, response, next) => {
    app.locals.isLogin = false;
    app.locals.request_path = request.path;
    next();
});

app.get('/', (request, response) => {
    response.send("express start~!");
});

app.use('/admin', admin);
app.use('/contacts', contacts);

app.use((request, response, _) => {
    response.status(400).render('common/404.html');
});
app.use((request, response, _) => {
    response.status(500).render('common/5500.html')
})

app.listen(port, () => {
    console.log("Express listning on",port);
});

module.exports = app;
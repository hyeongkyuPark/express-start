const { response, request } = require("express");

exports.get_products = (_, response) => {
    response.render('admin/products.html', {
        message: 'hello'
    });
}

exports.get_products_write = (_, response) => {
    response.render('admin/write.html');
}

exports.post_products_write = (_, response) => {
    response.send(request.body);
}
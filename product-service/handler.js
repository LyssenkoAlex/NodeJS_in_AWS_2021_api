'use strict';
const products = require('./src/get-all-products');
const productById = require('./src/get-product-by-id');


module.exports.getProductsList = products.getAllProductsAPI;
module.exports.getProductById = productById.getProductByIdAPI;

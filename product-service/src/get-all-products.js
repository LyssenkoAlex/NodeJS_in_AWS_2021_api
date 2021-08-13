const productList = require('./productList.json');


const getAllProductsAPI = async (event) => {
    console.log('Lambda invocation with event', event);
    return {
        statusCode: 200,
        body: JSON.stringify(productList)
    }
}

module.exports.getAllProductsAPI = getAllProductsAPI;

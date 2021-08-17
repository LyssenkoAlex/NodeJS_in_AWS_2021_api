const productList = require('./productList.json');


const getAllProductsAPI = async (event) => {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(productList)
    }
}

module.exports.getAllProductsAPI = getAllProductsAPI;

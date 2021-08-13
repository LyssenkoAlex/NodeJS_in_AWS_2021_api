const productList = require('./productList.json');


const getProductByIdAPI = async (event) => {
    console.log('Lambda invocation with event', event);
    return {
        statusCode: 200,
        body: JSON.stringify(productList)
    }
}

module.exports.getProductByIdAPI = getProductByIdAPI;

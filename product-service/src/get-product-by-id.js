const productList = require('./productList.json');


const getProductByIdAPI = async (event) => {
    let productId
    if (event.queryStringParameters && event.queryStringParameters.productId) {
        console.log("Received name: " + event.queryStringParameters.productId);
        productId = event.queryStringParameters.productId;
    }
    const toReturn = productList.find((x) => x.id === productId);
    return {
        statusCode: 200,
        body: JSON.stringify(toReturn)
    }
}

module.exports.getProductByIdAPI = getProductByIdAPI;

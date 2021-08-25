const handlerDQL = require('../handler_dql');
const productList = require('../src/productList.json');


test('check getProductsList response', async () => {
    let functionResponse = await handlerProducts.getAllProducts();
    expect(JSON.parse(functionResponse.body)).toStrictEqual(productList);
});

test('check getProductById response', async () => {
    let functionResponse = await handlerDQL.getProductById({pathParameters:{productId:'7567ec4b-b10c-48c5-9345-fc73c48a80aa'}});
    expect(JSON.parse(functionResponse.body)).toStrictEqual(productList[0]);
});


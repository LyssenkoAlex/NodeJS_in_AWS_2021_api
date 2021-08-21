const handler = require('../handler_by_id');
const productList = require('../src/productList.json');


test('check getProductsList response', async () => {
    let functionResponse = await handler.getAllProducts();
    expect(JSON.parse(functionResponse.body)).toStrictEqual(productList);
});

test('check getProductById response', async () => {
    let functionResponse = await handler.getProductById({productId:'7567ec4b-b10c-48c5-9345-fc73c48a80a2'});
    expect(JSON.parse(functionResponse.body)).toStrictEqual(productList[2]);
});


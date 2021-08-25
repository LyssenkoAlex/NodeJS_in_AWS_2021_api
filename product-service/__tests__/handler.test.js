const handlerDQL = require('../handler_dql');
const handlerDML = require('../handler_dml');


test('check getProductsList response', async () => {
    let expectedJson = {
        count: 2,
        description: "Product 2 description",
        id: "f6d593a0-4e46-4a77-9062-057a8645ace1",
        logo: "https://r2.readrate.com/img/pictures/basic/792/792600/7926008/w800h317-89405d1d.jpg",
        price: 2000,
        title: "Product 2"}

    let functionResponse = await handlerDQL.getAllProducts();
    expect(JSON.parse(functionResponse.body)[0]).toStrictEqual(expectedJson);
});

test('check getProductById response', async () => {
    let expectedJson = {
            count: 2,
            description: "Product 2 description",
            id: "f6d593a0-4e46-4a77-9062-057a8645ace1",
            logo: "https://r2.readrate.com/img/pictures/basic/792/792600/7926008/w800h317-89405d1d.jpg",
            price: 2000,
            title: "Product 2"}
    let functionResponse = await handlerDQL.getProductById({pathParameters:{productId:'f6d593a0-4e46-4a77-9062-057a8645ace1'}});
    expect(JSON.parse(functionResponse.body)[0]).toStrictEqual(expectedJson);
});

test('check create response', async () => {
    let expectedJson = {
        count: 2,
        description: "Product 2 description",
        id: "f6d593a0-4e46-4a77-9062-057a8645ace1",
        logo: "https://r2.readrate.com/img/pictures/basic/792/792600/7926008/w800h317-89405d1d.jpg",
        price: 2000,
        title: "Product 2"}
    let functionResponse = await handlerDML.createProduct({body:JSON.stringify({price:'26',description:'test jest', count:'0', title:'jest'})});
    expect(JSON.parse(functionResponse.body)).toStrictEqual({
        "message": "Record was created"
    });
});


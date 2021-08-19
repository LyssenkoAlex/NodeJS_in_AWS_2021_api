import productList from './productList.json';
import {errorResponse, successResponse} from "./utils/responseBuilder";

export const getProductById = async (event) => {

  try {
    console.log('Lambda invocation with event: ', event);
    const  productId  = event.pathParameters;

    const product =  productList.find(prd => prd.id === productId);
    return product ? successResponse(product, 200) : successResponse({ message: "Product not found!!!" }, 404 );
  }
  catch (err) {
    return errorResponse(err, 500)
  }
};


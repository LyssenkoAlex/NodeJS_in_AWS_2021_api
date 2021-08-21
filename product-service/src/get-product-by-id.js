import productList from './productList.json';
import {errorResponse, successResponse} from "./utils/responseBuilder";

export const getProductById = async (event) => {
  console.log('getProductById Lambda invocation with event: ', event);
  try {
    const  productId  = event.productId;
    console.log('productId : ', productId);

    const product =  productList.find(prd => prd.id === productId);
    return product ? successResponse(product, 200) : successResponse({ message: "Product not found!!!" }, 404 );
  }
  catch (err) {
    return errorResponse(err, 500)
  }
};


import productList from './productList.json';
import {errorResponse, successResponse} from "./utils/responseBuilder";

export const getProductById = async (event) => {
  console.log('getProductById Lambda invocation with event: ', event);
  try {

    if(event !== undefined && event.pathParameters !== undefined && event.pathParameters.productId !== undefined) {
      const  productId  =  event.pathParameters.productId;
      const product =  productList.find(prd => prd.id === productId);
      return product ? successResponse(product, 200) : successResponse({ message: "Product not found!!!" }, 404 );
    }
    else {
      return successResponse({ message: "Parameter is empty" }, 404 );

    }
  }
  catch (err) {
    return errorResponse(err, 500)
  }
};


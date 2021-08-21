import productList from './productList.json';
import {errorResponse, successResponse} from "./utils/responseBuilder";

export const getAllProducts = async (event) => {
  console.log('getAllProducts Lambda invocation with event: ', event);
  try {
    return productList ? successResponse(productList, 200) : successResponse({ message: "List is empty" }, 404 );
  }
  catch (err) {
    return errorResponse(err, 500)
  }

};

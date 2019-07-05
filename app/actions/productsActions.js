/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestGetProducts(response) {
  return {
    type: types.GET_PRODUCTS_REQUEST,
    response,
  };
}

export function onGetProductsResponse(response) {
  return {
    type: types.GET_PRODUCTS_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.GET_PRODUCTS_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.GET_PRODUCTS_DISABLE_LOADER,
  };
}

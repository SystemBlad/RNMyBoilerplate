/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  products: [],
};

export const productsReducer = createReducer(initialState, {
  [types.GET_PRODUCTS_RESPONSE](state, action) {
    return {
      ...state,
      products: action.response,
    };
  },
  [types.GET_PRODUCTS_REQUEST](state, action) {
    return {
      ...state,
      products: [],
    };
  },
});

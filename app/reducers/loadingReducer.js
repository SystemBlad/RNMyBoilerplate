/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  isLoginLoading: false,
  isLoadingProducts: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state) {
    return { ...state, isLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state) {
    return { ...state, isLoginLoading: false };
  },
  [types.GET_PRODUCTS_ENABLE_LOADER](state) {
    return { ...state, isLoadingProducts: true };
  },
  [types.GET_PRODUCTS_DISABLE_LOADER](state) {
    return { ...state, isLoadingProducts: false };
  },
});

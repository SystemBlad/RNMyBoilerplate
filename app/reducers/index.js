/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as productsReducer from './productsReducer';
export default Object.assign(loginReducer, loadingReducer, productsReducer);

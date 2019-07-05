/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import productsSaga from './productsSaga';

export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(types.GET_PRODUCTS_REQUEST, productsSaga)]);
}

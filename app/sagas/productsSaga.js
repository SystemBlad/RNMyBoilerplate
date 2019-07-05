/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { call, put } from 'redux-saga/effects';

import { Alert } from 'react-native';
import getProducts from 'app/api/methods/products';
import * as productsActions from 'app/actions/productsActions';
import { displayLog, isEmpty } from '../utils/helpers';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
  yield put(productsActions.enableLoader());

  // how to call api
  displayLog('action', action);
  const response = yield call(getProducts);
  // mock response
  // const response = { success: true, data: { id: 1 } }
  displayLog('response', response);
  if (!isEmpty(response)) {
    displayLog('response.data', response);
    yield put(productsActions.disableLoader({}));
    yield put(productsActions.onGetProductsResponse(response));
  } else {
    yield put(productsActions.disableLoader({}));

    Alert.alert('', 'No products found');
  }
}

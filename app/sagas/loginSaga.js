/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { call, put } from 'redux-saga/effects';

import { Alert } from 'react-native';
import loginUser from 'app/api/methods/loginUser';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';
import { displayLog, isEmpty } from '../utils/helpers';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
  yield put(loginActions.enableLoader());

  // how to call api
  displayLog('action', action);
  const response = yield call(loginUser, action.username, action.password);
  // mock response
  // const response = { success: true, data: { id: 1 } }
  displayLog('response', response);
  if (!isEmpty(response)) {
    displayLog('response.data', response[0]);
    yield put(loginActions.onLoginResponse(response[0]));
    yield put(loginActions.disableLoader({}));
    yield call(navigationActions.navigateToHome);
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader({}));

    Alert.alert('BoilerPlate', 'Login Fail');
  }
}

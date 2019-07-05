import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function loginUser(username, password) {
  return Api(
    ApiConstants.LOGIN + '?userName=' + username + '&password=' + password,
    null,
    'get',
    null
  );
}

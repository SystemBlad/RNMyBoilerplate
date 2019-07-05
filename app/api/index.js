// General api to access data
import ApiConstants from './ApiConstants';
import { displayLog } from '../utils/helpers';
export default function api(path, params, method, token) {
  let options;
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { token: token }),
    },
    method: method,
    ...(params && { body: JSON.stringify(params) }),
  };

  return fetch(ApiConstants.BASE_URL + path, options)
    .then((resp) => {
      displayLog('resp', resp);
      return resp.json();
    })
    .then((json) => {
      displayLog('json', json);
      return json;
    })
    .catch((error) => error);
}

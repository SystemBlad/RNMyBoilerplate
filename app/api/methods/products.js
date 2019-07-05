import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getProducts() {
  return Api(ApiConstants.PRODUCTS, null, 'get', null);
}

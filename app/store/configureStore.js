import { applyMiddleware, compose, createStore } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default: localStorage if web, AsyncStorage if react-native
import createSagaMiddleware from 'redux-saga';

import rootReducers from 'app/reducers'; // where reducers is a object of reducers
import sagas from 'app/sagas';

const config = {
  key: 'root',
  storage,
  blacklist: ['nav', 'loadingReducer'],
  debug: true, // to get useful logging
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  //   console.log('Test', store.getState());
});
const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;

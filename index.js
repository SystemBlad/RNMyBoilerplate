/**
 * @format
 */
// @flow
import { AppRegistry } from 'react-native';
import App from './app/Entrypoint';
import { name as appName } from './app.json';
import { displayLog } from './app/utils/helpers';

if (__DEV__) {
  import('./ReactotronConfig').then(() => displayLog('--REACTOTRON STARTED--'));
}

AppRegistry.registerComponent(appName, () => App);

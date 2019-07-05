import { createAppContainer } from 'react-navigation';
import AppStyles from '../config/styles';
import Login from 'app/screens/Login';
import CreateAccount from 'app/screens/CreateAccount';
import Home from 'app/screens/Home';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

const RNApp = FluidNavigator(
  {
    Login: {
      screen: Login,
    },
    CreateAccount: {
      screen: CreateAccount,
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Login',
    cardStyle: { backgroundColor: AppStyles.colors.appBackgroundColor },
    mode: 'card',
    defaultNavigationOptions: { gesturesEnabled: true },
  }
);

export default createAppContainer(RNApp);

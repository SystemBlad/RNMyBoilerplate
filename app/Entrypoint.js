/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import AppStyles from './config/styles';
import './i18n';

const { persistor, store } = configureStore();

const theme = {
  ...DefaultTheme,
  roundness: 5,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: AppStyles.colors.primary,
    accent: AppStyles.colors.accent,
    background: AppStyles.colors.background,
    placeholder: AppStyles.colors.placeholder,
    text: AppStyles.colors.text,
    underlineColor: AppStyles.colors.underlineColor,
    surface: AppStyles.colors.appBackgroundColor,
  },
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: AppStyles.colors.appBackgroundColor,
    height: getStatusBarHeight(true),
  },
});

export default function Entrypoint() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <PaperProvider theme={theme}>
          <View style={styles.statusBar}>
            <StatusBar barStyle="light-content" backgroundColor={AppStyles.colors.primary} />
          </View>
          <Navigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

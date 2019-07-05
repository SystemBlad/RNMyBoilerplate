// @flow
import * as React from 'react';
import { Dimensions, Platform, SafeAreaView, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const deviceHeight = Dimensions.get('window').height;

function MainContainer(props: Object) {
  return <SafeAreaView style={styles.mainContainer} {...props} />;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - getStatusBarHeight(true),
  },
});

export default MainContainer;

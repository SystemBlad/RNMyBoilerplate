// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native-paper';
import AppStyles from '../config/styles';

function LogoContainer(props: Object) {
  return (
    <View style={styles.logoContainer} {...props}>
      <Icon name="rocket" size={80} color={AppStyles.colors.primary} />
      <Text onPress={() => this.onLoginPress()} style={styles.logoText}>
        Company Logo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
});

export default LogoContainer;

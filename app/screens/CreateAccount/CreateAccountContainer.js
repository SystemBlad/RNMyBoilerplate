// @flow
import React from 'react';
import CreateAccountView from './CreateAccountView';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import { ScrollView } from 'react-native';
import { MainContainer } from '../../components';
import { Transition } from 'react-navigation-fluid-transitions';
import styles from './styles';
import { Appbar } from 'react-native-paper';
import NavigationService from '../../navigation/NavigationService';

function LoginContainer(props: Object) {
  return (
    <MainContainer>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Transition appear="top">
          <Appbar.Header>
            <Appbar.Content title="New Account" />
            <Appbar.BackAction onPress={() => NavigationService.goBack(null)} />
          </Appbar.Header>
        </Transition>
        <Transition appear="right">
          <CreateAccountView {...props} />
        </Transition>
      </ScrollView>
    </MainContainer>
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

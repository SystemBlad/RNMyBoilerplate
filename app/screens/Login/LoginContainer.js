// @flow
import React from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import { ScrollView } from 'react-native';
import { MainContainer } from '../../components';
import styles from './styles';

function LoginContainer(props: Object) {
  return (
    <MainContainer>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <LoginView {...props} />
      </ScrollView>
    </MainContainer>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.loadingReducer.isLoginLoading,
});

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

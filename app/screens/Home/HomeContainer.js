// @flow
import React, { useEffect } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import { MainContainer } from '../../components';
import { Appbar } from 'react-native-paper';
import styles from '../CreateAccount/styles';
import NavigationService from '../../navigation/NavigationService';
import { Transition } from 'react-navigation-fluid-transitions';
import { ScrollView } from 'react-native';
import * as productsActions from '../../actions/productsActions';
import * as loginActions from '../../actions/loginActions';
import { displayLog } from '../../utils/helpers';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeContainer(props: Object) {
  useEffect(() => {
    displayLog('useEffect');
    const fetchData = async () => {
      props.requestGetProducts();
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MainContainer>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Transition appear="top">
          <Appbar.Header>
            <Appbar.Content
              title="Home Screen"
              subtitle={`${'Welcome: '}${props.loggedUser.firstName}${' '}${
                props.loggedUser.lastName
              }`}
            />
            <Appbar.Action
              icon={({ size, color }) => (
                <MaterialCommunityIcons name={'logout-variant'} size={size} color={color} />
              )}
              onPress={() => {
                props.logout();
                NavigationService.goBack(null);
              }}
            />
          </Appbar.Header>
        </Transition>
        <Transition appear="right">
          <HomeView {...props} />
        </Transition>
      </ScrollView>
    </MainContainer>
  );
}

const mapStateToProps = (state) => ({
  loggedUser: state.loginReducer.loggedUser,
  products: state.productsReducer.products,
  isLoadingProducts: state.loadingReducer.isLoadingProducts,
});

function mapDispatchToProps(dispatch) {
  return {
    requestGetProducts: () => dispatch(productsActions.requestGetProducts()),
    logout: () => dispatch(loginActions.logout()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

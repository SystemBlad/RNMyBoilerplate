// @flow
import * as React from 'react';
import styles from './styles';
import { Alert, Keyboard, View } from 'react-native';
import { Button, LogoContainer, TextInput } from '../../components';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

export default function CreateAccountView() {
  const userNameRef = React.createRef();
  const passwordRef = React.createRef();
  const repeatPasswordRef = React.createRef();

  const { t } = useTranslation();
  return (
    <View style={styles.contentContainer}>
      <LogoContainer />
      <Formik
        initialValues={{ userName: '', password: '', repeatPassword: '' }}
        onSubmit={(values) => {
          Alert.alert(JSON.stringify(values, null, 2));
          Keyboard.dismiss();
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.formContainer}>
            <TextInput
              onChangeText={handleChange('userName')}
              value={values.userName}
              label={t('user_name')}
              returnKeyType="next"
              ref={userNameRef}
              style={styles.inputContainerStyle}
              onSubmitEditing={(event) => {
                if (passwordRef.current) {
                  passwordRef.current.focus();
                }
              }}
            />
            <TextInput
              onChangeText={handleChange('password')}
              value={values.password}
              label={t('password')}
              returnKeyType="next"
              secureTextEntry={true}
              ref={passwordRef}
              style={styles.inputContainerStyle}
              onSubmitEditing={(event) => {
                if (repeatPasswordRef.current) {
                  repeatPasswordRef.current.focus();
                }
              }}
            />

            <TextInput
              onChangeText={handleChange('repeatPassword')}
              value={values.repeatPassword}
              label={t('confirm_password')}
              returnKeyType="done"
              secureTextEntry={true}
              ref={repeatPasswordRef}
              style={styles.inputContainerStyle}
              onSubmitEditing={handleSubmit}
            />
            <Button onPress={handleSubmit} style={styles.loginButton}>
              {t('create')}
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
}

import React, {useState} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParams} from '../../Routers/typeRouters';
import {TextInputField, ButtonComponent, ButtonLink} from '../../Component';

const height = Dimensions.get('window').height;
const headerHeight = height / 3.5;
const bodyHeight = height - headerHeight;

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, 'AuthStack'>>();

  const [valueForm, setValueForm] = useState<{
    email: string;
    password: string;
  }>({email: '', password: ''});

  const handleChangeValue = (text: string, name: string) => {
    setValueForm({...valueForm, [name]: text});
  };

  const onPressLogin = () => {
    navigation.navigate('TabStack', {screen: 'HomeStack'});
  };

  const onPressForgotPassword = () => {
    navigation.navigate('AuthStack', {screen: 'ForgotPassword'});
  };

  const onPressSignUp = () => {
    navigation.navigate('AuthStack', {screen: 'Register'});
  };

  return (
    <>
      <View style={styles.headerBackGround} />
      <View style={styles.containerBody}>
        <Text style={styles.textApp}>Paymentey</Text>
        <TextInputField
          label="Email"
          value={valueForm.email}
          placeholder="กรุณากรอก Email"
          customStyle={styles.marginEmailInput}
          onChangeText={text => handleChangeValue(text, 'email')}
        />
        <TextInputField
          label="Password"
          value={valueForm.password}
          placeholder="กรุณากรอก Password"
          onChangeText={text => handleChangeValue(text, 'password')}
        />
        <ButtonComponent
          title="Login"
          onPress={onPressLogin}
          customStyleContainer={styles.marginButtonLogin}
        />
        <ButtonLink
          onPress={onPressForgotPassword}
          title="Forgot Password ?"
          customStyleContainer={styles.marginButtonForgotPassword}
        />
        <ButtonLink onPress={onPressSignUp} title="Sign Up" />
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  headerBackGround: {
    backgroundColor: 'pink',
    width: '100%',
    height: headerHeight,
  },

  containerBody: {
    top: -15,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    width: '100%',
    height: bodyHeight + 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  textApp: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 30,
  },

  marginEmailInput: {
    marginBottom: 30,
  },

  marginButtonLogin: {
    marginTop: 50,
    marginBottom: 30,
  },

  marginButtonForgotPassword: {
    marginBottom: 20,
  },
});

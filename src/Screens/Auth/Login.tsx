import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RootStackParams} from '@Types';
import {TextInputField, ButtonComponent, ButtonLink} from '@Components';
import {COLORS, FONTS, KEY_LOCAL_STORAGE} from '@Constants';
import {login, storeData} from '@Helpers';

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

  const onPressLogin = async () => {
    const {email, password} = valueForm;

    try {
      const response = await login({
        email,
        password,
      });

      await storeData(KEY_LOCAL_STORAGE.TOKEN, response.data.token);
      navigation.navigate('TabStack', {
        screen: 'HomeStack',
        params: {screen: 'Home'},
      });

      navigation.dispatch(
        CommonActions.reset({index: 1, routes: [{name: 'TabStack'}]}),
      );
    } catch (error: any) {
      Alert.alert(error.response.data.message);
    }
  };

  const onPressForgotPassword = () => {
    navigation.navigate('AuthStack', {screen: 'ForgotPassword'});
  };

  const onPressSignUp = () => {
    navigation.navigate('AuthStack', {screen: 'Register'});
  };

  return (
    <SafeAreaView
      edges={['right', 'left', 'bottom']}
      style={styles.safeAreaView}>
      <View style={styles.headerBackGround} />
      <View style={styles.containerBody}>
        <Text style={styles.textApp}>Paymentey</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },

  headerBackGround: {
    height: headerHeight,
    backgroundColor: COLORS.SOFT_BLUE,
    width: '100%',
  },

  containerBody: {
    top: -15,
    height: bodyHeight + 15,
    paddingHorizontal: 30,
    paddingTop: 15,
    backgroundColor: COLORS.WHITE,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  textApp: {
    fontSize: 30,
    marginBottom: 30,
    color: COLORS.PINK,
    fontFamily: FONTS.MITR_SEMI_BOLD,
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

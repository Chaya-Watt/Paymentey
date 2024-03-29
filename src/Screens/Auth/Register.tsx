import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from '@Redux/hook';

import {RootStackParams} from '@Types';
import {TextInputField, ButtonComponent} from '@Components';
import {COLORS, FONTS} from '@Constants';
import {signUpAction} from '@Redux/Slices';

const height = Dimensions.get('window').height;
const headerHeight = height / 3.5;
const bodyHeight = height - headerHeight;

const Register = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, 'AuthStack'>>();
  const dispatch = useAppDispatch();

  const [valueForm, setValueForm] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
  }>({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  });

  const handleChangeValue = (text: string, name: string) => {
    setValueForm({...valueForm, [name]: text});
  };

  const onPressCreateAccount = async () => {
    const {email, password, confirmPassword, username} = valueForm;

    try {
      await dispatch(
        signUpAction({
          email,
          password,
          confirmPassword,
          username,
        }),
      ).unwrap();

      navigation.dispatch(
        CommonActions.reset({index: 1, routes: [{name: 'TabStack'}]}),
      );
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView
      edges={['right', 'left', 'bottom']}
      style={styles.safeAreaView}>
      <View style={styles.headerBackGround} />
      <View style={styles.containerBody}>
        <Text style={styles.textApp}>Register</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <TextInputField
            label="Email"
            value={valueForm.email}
            placeholder="กรุณากรอก Email"
            customStyle={styles.marginInput}
            onChangeText={text => handleChangeValue(text, 'email')}
          />
          <TextInputField
            label="Password"
            value={valueForm.password}
            placeholder="กรุณากรอก Password"
            customStyle={styles.marginInput}
            onChangeText={text => handleChangeValue(text, 'password')}
          />
          <TextInputField
            label="Confirm Password"
            value={valueForm.confirmPassword}
            placeholder="กรุณายืนยัน Password"
            customStyle={styles.marginInput}
            onChangeText={text => handleChangeValue(text, 'confirmPassword')}
          />
          <TextInputField
            label="Name"
            value={valueForm.username}
            placeholder="กรุณากรอกชื่อ"
            customStyle={styles.marginInput}
            onChangeText={text => handleChangeValue(text, 'username')}
          />
          <ButtonComponent
            title="Create Account"
            onPress={onPressCreateAccount}
            customStyleContainer={styles.marginButtonLogin}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Register;

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
    marginBottom: 10,
    color: COLORS.PINK,
    fontFamily: FONTS.MITR_SEMI_BOLD,
  },

  marginInput: {
    marginBottom: 20,
  },

  marginButtonLogin: {
    marginTop: 50,
    marginBottom: 30,
  },

  marginButtonForgotPassword: {
    marginBottom: 20,
  },
});

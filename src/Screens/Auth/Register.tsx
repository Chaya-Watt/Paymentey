import React, {useState} from 'react';
import {Text, View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RootStackParams} from '@Routers/typeRouters';
import {TextInputField, ButtonComponent} from '@Components';
import {COLORS, FONTS} from '@Constants';

const height = Dimensions.get('window').height;
const headerHeight = height / 3.5;
const bodyHeight = height - headerHeight;

const Register = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, 'AuthStack'>>();

  const [valueForm, setValueForm] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
  }>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const handleChangeValue = (text: string, name: string) => {
    setValueForm({...valueForm, [name]: text});
  };

  const onPressCreateAccount = () => {
    navigation.navigate('TabStack', {screen: 'HomeStack'});
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
            value={valueForm.name}
            placeholder="กรุณากรอกชื่อ"
            customStyle={styles.marginInput}
            onChangeText={text => handleChangeValue(text, 'name')}
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
    color: COLORS.SOFT_RED,
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

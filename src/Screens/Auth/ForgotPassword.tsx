import React, {useState} from 'react';
import {Text, View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RootStackParams} from '@Types';
import {TextInputField, ButtonComponent} from '@Components';
import {COLORS, FONTS} from '@Constants';

const height = Dimensions.get('window').height;
const headerHeight = height / 3.5;
const bodyHeight = height - headerHeight;

const ForgotPassword = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, 'AuthStack'>>();

  const [valueForm, setValueForm] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChangeValue = (text: string, name: string) => {
    setValueForm({...valueForm, [name]: text});
  };

  const onPressResetPassword = () => {
    navigation.navigate('TabStack', {
      screen: 'HomeStack',
      params: {screen: 'Home'},
    });
  };

  return (
    <SafeAreaView
      edges={['right', 'left', 'bottom']}
      style={styles.safeAreaView}>
      <View style={styles.headerBackGround} />
      <View style={styles.containerBody}>
        <Text style={styles.textApp}>Forgot Password</Text>
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
          <ButtonComponent
            title="Reset Password"
            onPress={onPressResetPassword}
            customStyleContainer={styles.marginButtonLogin}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

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
    marginBottom: 20,
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

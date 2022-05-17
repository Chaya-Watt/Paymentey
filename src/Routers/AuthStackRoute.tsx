import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login, Register, ForgotPassword} from '../Screens';
import {AuthStackParams} from '@Types';

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthStackRoute = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthStackRoute;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AuthStackRoute from './AuthStackRoute';
import TabStackRoute from './TabStackRoute';
import {RootStackParams} from './typeRouters';

const RootStack = createNativeStackNavigator<RootStackParams>();

const Routers: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="AuthStack"
          screenOptions={{headerShown: false}}>
          <RootStack.Screen name="AuthStack" component={AuthStackRoute} />
          <RootStack.Screen name="TabStack" component={TabStackRoute} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routers;

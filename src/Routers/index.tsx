import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AuthStackRoute from './AuthStackRoute';
import TabStackRoute from './TabStackRoute';
import {RootStackParams} from '@Types';
import {getStoreData} from '@Helpers';
import {KEY_LOCAL_STORAGE} from '@Constants';

const RootStack = createNativeStackNavigator<RootStackParams>();

const Routers: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>();

  const checkUserLogin = async () => {
    const responseToken = await getStoreData(KEY_LOCAL_STORAGE.TOKEN);

    if (responseToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    checkUserLogin();
  }, []);

  if (isLogin == null) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName={isLogin ? 'TabStack' : 'AuthStack'}
            screenOptions={{headerShown: false}}>
            <RootStack.Screen name="AuthStack" component={AuthStackRoute} />
            <RootStack.Screen name="TabStack" component={TabStackRoute} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
};

export default Routers;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../Screens';
import {HomeStackParams} from '@Types';

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeStackRoute = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

export default HomeStackRoute;

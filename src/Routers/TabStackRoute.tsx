import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabStackParams} from '@Types';
import HomeStackRoute from './HomeStackRoute';

const TabStack = createBottomTabNavigator<TabStackParams>();

const TabStackRoute = () => {
  return (
    <TabStack.Navigator screenOptions={{headerShown: false}}>
      <TabStack.Screen name="HomeStack" component={HomeStackRoute} />
      <TabStack.Screen name="CreateTransaction" component={() => null} />
      <TabStack.Screen name="Setting" component={() => null} />
    </TabStack.Navigator>
  );
};

export default TabStackRoute;

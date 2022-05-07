import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabStackParams} from './typeRouters';

const TabStack = createBottomTabNavigator<TabStackParams>();

const TabStackRoute = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="HomeStack" component={() => null} />
      <TabStack.Screen name="CreateTransaction" component={() => null} />
      <TabStack.Screen name="Setting" component={() => null} />
    </TabStack.Navigator>
  );
};

export default TabStackRoute;

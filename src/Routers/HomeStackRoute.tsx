import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {Home, History} from '../Screens';
import {HomeStackParams} from '@Types';
import {StyleSheet} from 'react-native';

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeStackRoute = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const currentRouterName = getFocusedRouteNameFromRoute(route);

    if (currentRouterName === 'History') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: styles.containerTabBar});
    }
  }, [navigation, route]);

  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="History" component={History} />
    </HomeStack.Navigator>
  );
};

export default HomeStackRoute;

const styles = StyleSheet.create({
  containerTabBar: {
    display: 'flex',
    height: 80,
    position: 'absolute',
    borderTopWidth: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, TouchableOpacity, StyleSheet, LogBox} from 'react-native';

import {TabStackParams} from '@Types';
import {COLORS, FONTS} from '@Constants';
import HomeStackRoute from './HomeStackRoute';
import {CreateTransaction} from '@Screens';

import homeIcon from '@Icons/home-icon.png';
import homeActiveIcon from '@Icons/home-active-icon.png';
import addIcon from '@Icons/add-icon.png';
import addActiveIcon from '@Icons/add-active-icon.png';
import settingIcon from '@Icons/setting-icon.png';
import settingActiveIcon from '@Icons/setting-active-icon.png';

const TabStack = createBottomTabNavigator<TabStackParams>();

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const TabStackRoute = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles({}).containerTabBar,
      }}>
      <TabStack.Screen
        name="HomeStack"
        component={HomeStackRoute}
        options={{
          tabBarButton: props => (
            <TabButtonCustom
              {...props}
              title="Home"
              icon={homeIcon}
              iconActive={homeActiveIcon}
            />
          ),
        }}
      />
      <TabStack.Screen
        name="CreateTransaction"
        component={CreateTransaction}
        options={{
          tabBarButton: props => (
            <TabButtonCustom
              {...props}
              title="Create"
              icon={addIcon}
              iconActive={addActiveIcon}
            />
          ),
        }}
      />
      <TabStack.Screen
        name="Setting"
        component={() => null}
        options={{
          tabBarButton: props => (
            <TabButtonCustom
              {...props}
              title="Setting"
              icon={settingIcon}
              iconActive={settingActiveIcon}
            />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabStackRoute;

const TabButtonCustom = ({
  onPress,
  accessibilityState,
  title,
  icon,
  iconActive,
}: any) => {
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity onPress={onPress} style={styles({}).button}>
      <Image
        source={focused ? iconActive : icon}
        style={[styles({}).iconTabBar, focused && styles({}).activeIcon]}
      />
      {focused && <Text style={styles({focused}).textButton}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = ({focused}: any) =>
  StyleSheet.create({
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

    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
    },

    iconTabBar: {
      height: 25,
      width: 25,
      marginBottom: 5,
    },

    activeIcon: {
      tintColor: COLORS.SOFT_BLUE,
    },

    textButton: {
      fontFamily: FONTS.MITR_REGULAR,
      fontSize: 12,
      color: focused ? COLORS.PINK : COLORS.BLACK,
    },
  });

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IonicIcon from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR} from '../utils/constans';
import HomeStack from './stack/HomeStack';
import SettingsStack from './stack/SettingsStack';

const Tab = createBottomTabNavigator();

const ScreensTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: MAIN_COLOR,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <IonicIcon name="home" color={color} size={size} />
          ),
          tabBarBadge: 5,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <IonicIcon name="settings" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default ScreensTab;

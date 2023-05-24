import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import StackScreen from './screens/StackScreen';
import {MAIN_COLOR} from './utils/constans';

import IonicIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStackNavigator.Screen
        name="StackScreen"
        component={StackScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: 'Stack',
        }}
      />
    </HomeStackNavigator.Navigator>
  );
};

const MyTabs = () => {
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
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => (
            <IonicIcon name="home" color={color} size={size} />
          ),
          tabBarBadge: 5,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Configuraciones',
          tabBarIcon: ({color, size}) => (
            <IonicIcon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default Navigation;

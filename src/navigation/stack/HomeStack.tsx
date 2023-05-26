import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackScreen from '../../screens/StackScreen';
import HomeScreen from '../../screens/HomeScreen';
import { ScreenNamesEnum } from '../../interfaces/enums';

const HomeStackNavigator = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator initialRouteName={ScreenNamesEnum.HOME_SCREEN}>
      <HomeStackNavigator.Screen
        name={ScreenNamesEnum.HOME_SCREEN}
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
      <HomeStackNavigator.Screen
        name={ScreenNamesEnum.STACK_SCREEN}
        component={StackScreen}
        options={{ headerTitle: 'Stack' }}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;

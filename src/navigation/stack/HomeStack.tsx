import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackScreen from '../../screens/StackScreen';
import HomeScreen from '../../screens/HomeScreen';

const HomeStackNavigator = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerTitle: 'Home'}}
      />
      <HomeStackNavigator.Screen
        name="StackScreen"
        component={StackScreen}
        options={{headerTitle: 'Stack'}}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;

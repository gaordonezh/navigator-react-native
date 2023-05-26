import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../../screens/SettingsScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const SettingsStackNavigator = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <SettingsStackNavigator.Navigator initialRouteName="Settings">
      <SettingsStackNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerTitle: 'Settings'}}
      />
      <SettingsStackNavigator.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerTitle: 'Profile'}}
      />
    </SettingsStackNavigator.Navigator>
  );
};

export default SettingsStack;

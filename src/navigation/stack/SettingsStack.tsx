import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../../screens/SettingsScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import { ScreenNamesEnum } from '../../interfaces/enums';

const SettingsStackNavigator = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <SettingsStackNavigator.Navigator initialRouteName={ScreenNamesEnum.SETTINGS_SCREEN}>
      <SettingsStackNavigator.Screen
        name={ScreenNamesEnum.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{ headerTitle: 'Settings' }}
      />
      <SettingsStackNavigator.Screen
        name={ScreenNamesEnum.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </SettingsStackNavigator.Navigator>
  );
};

export default SettingsStack;

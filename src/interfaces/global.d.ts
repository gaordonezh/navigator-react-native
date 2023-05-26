import {TouchableOpacityProps} from 'react-native';

export type RootStackParams = {
  HomeScreen: undefined;
  StackScreen: undefined;
  SettingsScreen: undefined;
  ProfileScreen: undefined;
};

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

import { TouchableOpacityProps } from 'react-native';
import { ScreenNamesEnum } from './enums';

export type RootStackParams = {
  [ScreenNamesEnum.HOME_SCREEN]: undefined;
  [ScreenNamesEnum.STACK_SCREEN]: undefined;
  [ScreenNamesEnum.SETTINGS_SCREEN]: undefined;
  [ScreenNamesEnum.PROFILE_SCREEN]: undefined;
};

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export interface AppContextProps {}

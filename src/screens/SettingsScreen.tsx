import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import useNavigate from '../hooks/useNavigate';
import { ScreenNamesEnum } from '../interfaces/enums';
import styles from '../theme';

const SettingsScreen = () => {
  const { navigate } = useNavigate();

  useEffect(() => {
    console.log('render settings screen');
  }, []);

  return (
    <View style={styles.centered}>
      <Text>SETTINGS SCREEN</Text>

      <Button label="GO TO PROFILE VIEW" onPress={() => navigate(ScreenNamesEnum.PROFILE_SCREEN)} />
    </View>
  );
};

export default SettingsScreen;

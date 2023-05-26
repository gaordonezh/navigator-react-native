import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import useNavigate from '../hooks/useNavigate';
import { ScreenNamesEnum } from '../interfaces/enums';
import styles from '../theme';

const HomeScreen = () => {
  const { navigate } = useNavigate();

  useEffect(() => {
    console.log('render home screen');
  }, []);

  return (
    <View style={styles.centered}>
      <Text>HOME SCREEN</Text>
      <Button label="GO TO SECOND VIEW" onPress={() => navigate(ScreenNamesEnum.STACK_SCREEN)} />
    </View>
  );
};

export default HomeScreen;

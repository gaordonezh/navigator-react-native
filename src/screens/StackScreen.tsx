import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../theme';

const StackScreen = () => {
  useEffect(() => {
    console.log('render stack screen');
  }, []);

  return (
    <View style={styles.centered}>
      <Text>STACK SCREEN</Text>
    </View>
  );
};

export default StackScreen;

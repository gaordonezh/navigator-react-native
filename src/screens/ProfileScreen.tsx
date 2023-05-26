import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../theme';

const ProfileScreen = () => {
  useEffect(() => {
    console.log('render profile screen');
  }, []);

  return (
    <View style={styles.centered}>
      <Text>PROFILE SCREEN</Text>
    </View>
  );
};

export default ProfileScreen;

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const ProfileScreen = () => {
  useEffect(() => {
    console.log('render profile screen');
  }, []);

  return (
    <View>
      <Text>PROFILE SCREEN</Text>
    </View>
  );
};

export default ProfileScreen;

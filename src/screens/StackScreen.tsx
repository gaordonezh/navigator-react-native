import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const StackScreen = () => {
  useEffect(() => {
    console.log('render stack screen');
  }, []);

  return (
    <View>
      <Text>STACK SCREEN</Text>
    </View>
  );
};

export default StackScreen;

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Button from '../components/Button';
import useNavigate from '../hooks/useNavigate';

const HomeScreen = () => {
  const {navigate} = useNavigate();

  useEffect(() => {
    console.log('render home screen');
  }, []);

  return (
    <View>
      <Text>HOME SCREEN</Text>
      <Button
        label="GO TO SECOND VIEW"
        onPress={() => navigate('StackScreen')}
      />
    </View>
  );
};

export default HomeScreen;

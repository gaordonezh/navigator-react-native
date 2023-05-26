import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Button from '../components/Button';
import useNavigate from '../hooks/useNavigate';

const SettingsScreen = () => {
  const {navigate} = useNavigate();

  useEffect(() => {
    console.log('render settings screen');
  }, []);

  return (
    <View>
      <Text>SETTINGS SCREEN</Text>

      <Button
        label="GO TO PROFILE VIEW"
        onPress={() => navigate('ProfileScreen')}
      />
    </View>
  );
};

export default SettingsScreen;

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../interfaces/global';
import {MAIN_COLOR} from '../utils/constans';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View>
      <Text>HOME SCREEN</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('StackScreen')}
        style={{
          backgroundColor: MAIN_COLOR,
          padding: 10,
          marginTop: '20%',
          width: '50%',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 15, textAlign: 'center', color: 'white'}}>
          STACK VIEW
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {MAIN_COLOR} from '../utils/constans';
import {ButtonProps} from '../interfaces/global';

const Button = ({style, label, ...rest}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: MAIN_COLOR,
        padding: 10,
        width: '50%',
        alignSelf: 'center',
        borderRadius: 10,
        ...(style as any),
      }}
      {...rest}>
      <Text style={{fontSize: 15, textAlign: 'center', color: 'white'}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

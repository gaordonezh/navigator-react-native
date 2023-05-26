import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from '../interfaces/global';
import styles from '../theme';

const Button = ({ style, label, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...(style as any) }} {...rest}>
      <Text style={{ ...styles.buttonText }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

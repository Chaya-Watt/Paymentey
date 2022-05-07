import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {TypeButton} from './TypeButton';

const ButtonComponent: React.FC<TypeButton> = ({
  onPress,
  title,
  customStyleContainer,
}) => {
  return (
    <TouchableOpacity
      style={[styles.containerButton, customStyleContainer]}
      onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,

    borderWidth: 1,
    borderRadius: 10,

    width: '100%',
  },
});

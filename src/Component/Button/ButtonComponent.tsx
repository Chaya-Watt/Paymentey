import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS, FONTS} from '../../Constant';
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
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,

    borderRadius: 10,
    width: '100%',

    backgroundColor: COLORS.SOFT_RED,
  },

  textButton: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: FONTS.MITR_MEDIUM,
  },
});

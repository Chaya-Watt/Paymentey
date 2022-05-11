import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import {TypeButton} from './TypeButton';
import {COLORS, FONTS} from '../../Constant';

const ButtonLink: React.FC<TypeButton> = ({
  onPress,
  title,
  customStyleContainer,
  customStyleText,
}) => {
  return (
    <TouchableOpacity style={customStyleContainer} onPress={onPress}>
      <Text style={[styles.textLink, customStyleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLink;

const styles = StyleSheet.create({
  textLink: {
    color: COLORS.SOFT_PINK,
    fontFamily: FONTS.MITR_LIGHT,
  },
});

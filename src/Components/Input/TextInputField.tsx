import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {FONTS} from '@Constants';
import {TypeTextInputField} from '@Types';

const TextInputField: React.FC<TypeTextInputField> = ({
  label,
  value,
  placeholder,
  onChangeText,
  customStyle,
}) => {
  return (
    <View style={customStyle}>
      <Text style={styles({}).label}>{label}</Text>
      <TextInput
        style={styles({}).input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInputField;

const styles = ({mt, mb}: {mt?: number; mb?: number}) =>
  StyleSheet.create({
    label: {
      fontSize: 14,
      color: 'black',
      marginBottom: 8,
      fontFamily: FONTS.MITR_REGULAR,
    },

    input: {
      width: '100%',
      paddingVertical: 15,
      paddingHorizontal: 10,
      marginTop: mt,
      marginBottom: mb,

      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 1,

      fontFamily: FONTS.MITR_LIGHT,
    },
  });

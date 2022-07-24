import {COLORS, FONTS} from '@Constants';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import iconCalendar from '@Icons/calendar-icon.png';
import {TypeButtonDate} from '@Types';

const ButtonSelectDate: React.FC<TypeButtonDate> = ({onPressIcon, date}) => {
  return (
    <View style={styles.containerButtonSelectDate}>
      <View style={styles.spaceDate}>
        <Text style={styles.textDate}>{date}</Text>
      </View>
      <View style={styles.lineSplit} />
      <TouchableOpacity style={styles.spaceIcon} onPress={onPressIcon}>
        <View style={styles.backgroundIcon}>
          <Image source={iconCalendar} style={styles.calendarIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSelectDate;

const styles = StyleSheet.create({
  containerButtonSelectDate: {
    backgroundColor: COLORS.SOFT_BLUE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 52,
    borderRadius: 10,
    width: '100%',
  },

  lineSplit: {
    width: 1,
    backgroundColor: COLORS.WHITE,
    marginVertical: 10,
  },

  calendarIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.PINK,
  },

  textDate: {
    fontFamily: FONTS.MITR_MEDIUM,
    fontSize: 14,
    color: COLORS.WHITE,
  },

  spaceDate: {
    flex: 0.9,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  spaceIcon: {
    flex: 0.1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundIcon: {
    backgroundColor: COLORS.SOFT_PINK,
    padding: 5,
    borderRadius: 5,
  },
});

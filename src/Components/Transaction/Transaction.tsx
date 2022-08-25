import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import HistoryIcon from '@Icons/history-icon.png';
import {COLORS, FONTS} from '@Constants';

const Transaction = () => {
  return (
    <View style={styles.containerTransaction}>
      <View style={styles.containerIcon}>
        <Image source={HistoryIcon} style={styles.icon} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.topicText} numberOfLines={1}>
          Topic Transaction
        </Text>
        <Text style={styles.timeText} numberOfLines={1}>
          12:00
        </Text>
      </View>
      <Text style={styles.containerAmount}>- 50000 B</Text>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  containerTransaction: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 50,
    flexWrap: 'wrap',

    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  containerIcon: {
    flex: 1,
    width: 40,
    height: 40,
    minHeight: 40,
    minWidth: 40,
    maxWidth: 40,
    maxHeight: 40,
    backgroundColor: COLORS.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
  },

  icon: {
    width: 20,
    height: 20,
  },

  containerText: {
    flex: 2,
    marginRight: 10,
    minWidth: 100,
  },

  topicText: {
    fontFamily: FONTS.MITR_MEDIUM,
    fontSize: 14,
    color: COLORS.BLACK,
  },

  timeText: {
    fontFamily: FONTS.MITR_LIGHT,
    fontSize: 12,
    color: COLORS.GRAY,
  },

  containerAmount: {
    color: COLORS.RED,
    fontFamily: FONTS.MITR_REGULAR,
    textAlign: 'center',
  },
});

import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import HistoryIcon from '@Icons/history-icon.png';
import {COLORS, FONTS} from '@Constants';
import dayjs from 'dayjs';
import {formatCurrency} from '@Helpers';

const Transaction = ({data}) => {
  const isExpense = data.typeOfTransaction === 'Expense';

  return (
    <View
      style={[
        styles.containerTransaction,
        styleColorTransaction({isExpense}).containerColor,
      ]}>
      <View style={styles.containerIcon}>
        <Image source={HistoryIcon} style={styles.icon} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.topicText} numberOfLines={1}>
          {data.topic}
        </Text>
        <Text style={styles.timeText} numberOfLines={1}>
          {dayjs(data.date).format('HH:mm')}
        </Text>
      </View>
      <Text style={[styles.containerAmount, isExpense && {color: COLORS.RED}]}>
        {isExpense
          ? formatCurrency(-data.amount, true)
          : formatCurrency(data.amount, true)}
      </Text>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  containerTransaction: {
    flexDirection: 'row',
    minHeight: 50,
    flexWrap: 'wrap',
    marginHorizontal: 15,
    marginVertical: 10,

    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  containerIcon: {
    flex: 1,
    width: 40,
    height: 40,
    minHeight: 40,
    minWidth: 40,
    maxWidth: 40,
    maxHeight: 40,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
  },

  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.DARK_GRAY,
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
    color: COLORS.DARK_GRAY,
  },

  containerAmount: {
    color: COLORS.GREEN,
    fontFamily: FONTS.MITR_REGULAR,
    textAlign: 'center',
  },
});

const styleColorTransaction = ({isExpense}: {isExpense?: boolean}) =>
  StyleSheet.create({
    containerColor: {
      backgroundColor: isExpense ? COLORS.SOFT_RED : COLORS.SOFT_GREEN,
    },
  });

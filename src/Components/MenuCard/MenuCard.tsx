import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {COLORS, FONTS} from '@Constants';
import {formatCurrency} from '@Helpers';
import {TypePropMenuCard} from '@Types';

const MenuCard: React.FC<TypePropMenuCard> = ({
  menuTitle,
  dataTransaction,
  onPress,
}) => {
  const [isTotalPositive, setIsTotalPositive] = useState<boolean>();
  const {income, expense} = dataTransaction;
  const totalAmount = income - expense;

  const calTotalAmount = () => {
    if (totalAmount > 0) {
      setIsTotalPositive(true);
    } else {
      setIsTotalPositive(false);
    }
  };

  useEffect(() => {
    calTotalAmount();
  }, [totalAmount]);

  return (
    <TouchableOpacity style={styles.containerMenuCard} onPress={onPress}>
      <View style={styles.containerContentHeader}>
        <Text style={styles.textMenu}>{menuTitle}</Text>
        <Text
          style={
            styleContainerTransaction({isPositive: isTotalPositive}).totalAmount
          }>
          {formatCurrency(totalAmount)}
        </Text>
      </View>

      <View style={styles.line} />
      <View
        style={
          styleContainerTransaction({
            backgroundColor: COLORS.SOFT_GREEN,
            mb: 15,
          }).containerTransaction
        }>
        <Text
          style={
            styleContainerTransaction({
              textColor: COLORS.GREEN,
            }).textTransaction
          }>
          Income
        </Text>
        <Text
          style={
            styleContainerTransaction({
              textColor: COLORS.GREEN,
            }).textTransaction
          }>
          {formatCurrency(income)}
        </Text>
      </View>
      <View
        style={
          styleContainerTransaction({
            backgroundColor: COLORS.SOFT_RED,
          }).containerTransaction
        }>
        <Text
          style={
            styleContainerTransaction({
              textColor: COLORS.RED,
            }).textTransaction
          }>
          Expense
        </Text>
        <Text
          style={
            styleContainerTransaction({
              textColor: COLORS.RED,
            }).textTransaction
          }>
          {formatCurrency(expense)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  containerMenuCard: {
    backgroundColor: COLORS.WHITE,
    margin: 1,
    marginBottom: 20,
    padding: 15,

    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  containerContentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textMenu: {
    fontFamily: FONTS.MITR_MEDIUM,
    fontSize: 16,
    color: COLORS.PINK,
  },

  line: {
    width: '100%',
    height: 1.5,
    backgroundColor: COLORS.GRAY,
    marginVertical: 5,
  },
});

const styleContainerTransaction = ({
  mt,
  mb,
  backgroundColor,
  textColor,
  isPositive,
}: {
  mt?: number;
  mb?: number;
  backgroundColor?: string;
  textColor?: string;
  isPositive?: boolean;
}) =>
  StyleSheet.create({
    containerTransaction: {
      flexDirection: 'row',
      backgroundColor: backgroundColor,
      justifyContent: 'space-between',
      width: '100%',
      padding: 10,
      borderRadius: 10,
      marginTop: mt || 0,
      marginBottom: mb || 0,
    },

    textTransaction: {
      color: textColor,
      fontFamily: FONTS.MITR_REGULAR,
    },

    totalAmount: {
      fontFamily: FONTS.MITR_MEDIUM,
      fontSize: 16,
      color: isPositive ? COLORS.GREEN : COLORS.RED,
    },
  });

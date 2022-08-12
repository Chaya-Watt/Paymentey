import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {COLORS, FONTS} from '@Constants';
import {formatCurrency} from '@Helpers';
import {WalletComponentType} from '@Types';

const Wallet: React.FC<WalletComponentType> = ({walletName, balance}) => {
  const currency = formatCurrency(balance, true);

  return (
    <View style={styles.containerWallet}>
      <Text style={styles.titleBalance}>Wallet : {walletName}</Text>
      <Text style={styles.amount}>{currency}</Text>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  containerWallet: {
    height: 100,
    width: '100%',
    backgroundColor: COLORS.WHITE,
    paddingVertical: 10,
    paddingHorizontal: 20,

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

  titleBalance: {
    fontFamily: FONTS.MITR_MEDIUM,
    color: COLORS.GRAY,
  },

  amount: {
    fontSize: 24,
    fontFamily: FONTS.MITR_MEDIUM,
    color: COLORS.BLACK,
    alignSelf: 'center',
    marginTop: 5,
  },
});

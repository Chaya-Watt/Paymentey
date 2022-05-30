import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {COLORS} from '@Constants';
import coinIcon from '@Icons/dollar-icon.png';

import {HeaderBar} from '@Components';
function CreateTransaction() {
  return (
    <>
      <SafeAreaView edges={['top']} style={styles.safeAreaHeader} />
      <HeaderBar
        icon={coinIcon}
        headerTitle="Wallet Name"
        title="เงินใช้รายเดือน"
        headerDescription="Balance"
        description={10000}
      />
    </>
  );
}

export default CreateTransaction;

const styles = StyleSheet.create({
  safeAreaHeader: {
    flex: 0,
    backgroundColor: COLORS.SOFT_BLUE,
  },
});

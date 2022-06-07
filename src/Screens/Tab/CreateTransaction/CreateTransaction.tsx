import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {COLORS} from '@Constants';
import {DropDown, HeaderBar} from '@Components';

import coinIcon from '@Icons/dollar-icon.png';
import arrowUpIcon from '@Icons/arrow-up-icon.png';
import arrowDownIcon from '@Icons/arrow-down-icon.png';
import {TypeListOfDropDown} from '@Types';

function CreateTransaction() {
  const [selected, setSelected] = useState<TypeListOfDropDown>();
  const [isOpenSelected, setIsOpenSelected] = useState<boolean>(false);
  const listTypeTransaction: TypeListOfDropDown[] = [
    {
      id: 1,
      label: 'Income',
      value: 'Income',
    },
    {
      id: 2,
      label: 'Expense',
      value: 'Expense',
    },
  ];

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
      <View style={styles.containerContent}>
        <DropDown
          listSelect={listTypeTransaction}
          selected={selected}
          isOpen={isOpenSelected}
          onPress={() => setIsOpenSelected(!isOpenSelected)}
          onSelect={item => {
            setSelected(item);
            setIsOpenSelected(false);
          }}
          customStyle={
            selected
              ? {
                  backgroundColor:
                    selected.id === 1 ? COLORS.GREEN : COLORS.RED,
                }
              : {}
          }
          placeholder="Select Type Of Transaction"
          icon={isOpenSelected ? arrowUpIcon : arrowDownIcon}
        />
      </View>
    </>
  );
}

export default CreateTransaction;

const styles = StyleSheet.create({
  safeAreaHeader: {
    flex: 0,
    backgroundColor: COLORS.SOFT_BLUE,
  },

  containerContent: {
    flex: 1,
    padding: 15,
    marginBottom: 80,
    alignItems: 'center',
  },
});

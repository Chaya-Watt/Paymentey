import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {COLORS} from '@Constants';
import {
  ButtonComponent,
  DropDown,
  HeaderBar,
  TextInputField,
} from '@Components';

import coinIcon from '@Icons/dollar-icon.png';
import arrowUpIcon from '@Icons/arrow-up-icon.png';
import arrowDownIcon from '@Icons/arrow-down-icon.png';
import {TypeListOfDropDown} from '@Types';

function CreateTransaction() {
  const [selectedTypeTransaction, setSelectedTypeTransaction] =
    useState<TypeListOfDropDown>();
  const [isOpenSelected, setIsOpenSelected] = useState<boolean>(false);
  const [formValue, setFormValue] = useState<{
    topic: string;
    amount: string;
    date: string;
    note: string;
  }>({
    topic: '',
    amount: '',
    date: '',
    note: '',
  });

  const fieldForm = [
    {
      label: 'Topic',
      isRequire: true,
      errorMessage: 'กรุณาใส่หัวข้อ',
    },
    {
      label: 'Amount',
      isRequire: true,
      errorMessage: 'กรุณาใส่จำนวนเงิน',
    },
    {
      label: 'Date',
      isRequire: true,
      errorMessage: 'กรุณาระบุวันที่',
    },
    {
      label: 'Note',
      isRequire: false,
    },
  ];

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

  const handleCreateTransaction = () => {
    console.log('formValue', formValue);

    setFormValue({
      topic: '',
      amount: '',
      date: '',
      note: '',
    });

    setSelectedTypeTransaction(undefined);
  };

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
        <View style={styles.positionSelectTransaction}>
          <DropDown
            label="Select Type Of Transaction"
            listSelect={listTypeTransaction}
            selected={selectedTypeTransaction}
            isOpen={isOpenSelected}
            onPress={() => setIsOpenSelected(!isOpenSelected)}
            onSelect={item => {
              setSelectedTypeTransaction(item);
              setIsOpenSelected(false);
            }}
            customStyleDropDownColor={
              selectedTypeTransaction && {
                backgroundColor:
                  selectedTypeTransaction.id === 1 ? COLORS.GREEN : COLORS.RED,
              }
            }
            placeholder="Select Type Of Transaction"
            icon={isOpenSelected ? arrowUpIcon : arrowDownIcon}
          />
        </View>
        <FlatList
          style={{marginVertical: 10}}
          data={fieldForm}
          renderItem={({item}) => (
            <TextInputField
              label={item.label}
              value={
                formValue[
                  item.label.toLocaleLowerCase() as keyof {
                    topic: string;
                    amount: string;
                    date: string;
                    note: string;
                  }
                ]
              }
              onChangeText={value =>
                setFormValue({
                  ...formValue,
                  [item.label.toLocaleLowerCase()]: value,
                })
              }
              customStyle={{width: '100%', marginVertical: 10}}
            />
          )}
        />
        <ButtonComponent
          title="Create"
          onPress={() => handleCreateTransaction()}
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
    marginBottom: 50,
    paddingBottom: 45,
    backgroundColor: COLORS.WHITE,
  },

  positionSelectTransaction: {
    alignSelf: 'center',
  },
});

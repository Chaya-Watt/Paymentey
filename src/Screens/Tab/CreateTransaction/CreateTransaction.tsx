import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppSelector} from '@Redux/hook';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';

import {COLORS, FONTS, KEY_LOCAL_STORAGE} from '@Constants';
import {
  ButtonComponent,
  ButtonSelectDate,
  DropDown,
  HeaderBar,
  TextInputField,
} from '@Components';

import coinIcon from '@Icons/dollar-icon.png';
import arrowUpIcon from '@Icons/arrow-up-icon.png';
import arrowDownIcon from '@Icons/arrow-down-icon.png';
import {CreateTransactionRequestType, TypeListOfDropDown} from '@Types';
import {createTransaction, getStoreData} from '@Helpers';

const CreateTransaction = () => {
  const {user} = useAppSelector(state => state.user);
  const [selectedTypeTransaction, setSelectedTypeTransaction] =
    useState<TypeListOfDropDown>();
  const [isOpenSelected, setIsOpenSelected] = useState<boolean>(false);
  const [isOpenSelectDate, setIsOpenSelectDate] = useState<boolean>(false);

  const [formValue, setFormValue] = useState<{
    topic: string;
    amount: string;
    date: Date;
    note: string;
  }>({
    topic: '',
    amount: '',
    date: new Date(),
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

  const handleOpenSelectDate = () => {
    setIsOpenSelectDate(!isOpenSelectDate);
  };

  const onConfirmDate = (date: Date) => {
    setFormValue({...formValue, date});
    setIsOpenSelectDate(false);
  };

  const handleCreateTransaction = async () => {
    const token = await getStoreData(KEY_LOCAL_STORAGE.TOKEN);

    const dataCreateTransaction: CreateTransactionRequestType = {
      walletId: '1',
      creator: user.id,
      typeOfTransaction: selectedTypeTransaction
        ? selectedTypeTransaction.value
        : '',
      ...formValue,
      amount: Number(formValue.amount),
    };

    const responseCreateTransaction = await createTransaction(
      dataCreateTransaction,
      token || '',
    );

    console.log('responseCreateTransaction', responseCreateTransaction);

    setFormValue({
      topic: '',
      amount: '',
      date: new Date(),
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
      <ScrollView
        style={styles.containerContent}
        contentContainerStyle={styles.containerScrollView}>
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
        <View style={{marginVertical: 10}}>
          <Text style={styles.labelDate}>Select Date Transaction</Text>
          <ButtonSelectDate
            date={dayjs(formValue.date).format('DD MMM YYYY HH:mm')}
            onPressIcon={handleOpenSelectDate}
          />
        </View>

        {fieldForm.map(item => (
          <TextInputField
            label={item.label}
            value={
              formValue[
                item.label.toLocaleLowerCase() as keyof {
                  topic: string;
                  amount: string;
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
            customStyle={{width: '100%', marginBottom: 10}}
          />
        ))}

        <DatePicker
          modal
          mode="datetime"
          locale="th"
          open={isOpenSelectDate}
          date={formValue.date}
          onConfirm={onConfirmDate}
          onCancel={handleOpenSelectDate}
          title="Please Select Transaction Date"
          theme="auto"
          textColor={COLORS.BLACK}
        />

        <ButtonComponent
          title="Create"
          onPress={() => handleCreateTransaction()}
          customStyleContainer={{marginTop: 10}}
        />
      </ScrollView>
    </>
  );
};

export default CreateTransaction;

const styles = StyleSheet.create({
  safeAreaHeader: {
    flex: 0,
    backgroundColor: COLORS.SOFT_BLUE,
  },

  containerContent: {
    flex: 1,
    width: '100%',
    marginBottom: 50,
    backgroundColor: COLORS.WHITE,
  },

  containerScrollView: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 45,
  },

  labelDate: {
    fontFamily: FONTS.MITR_REGULAR,
    fontSize: 14,
    color: COLORS.BLACK,
    marginBottom: 8,
  },
});

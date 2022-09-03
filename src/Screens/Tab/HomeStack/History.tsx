import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert, SectionList, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import dayjs from 'dayjs';

import {Transaction} from '@Components';
import {COLORS, FONTS} from '@Constants';
import {getTransactionList} from '@Helpers';
import {useAppSelector} from '@Redux/hook';
import {GetTransactionListResponseType} from '@Types';

const History: React.FC<any> = ({route}) => {
  const {typeHistory, valueQuery} = route.params;
  const {user, wallet} = useAppSelector(state => ({
    user: state.user.user,
    wallet: state.wallet.wallet,
  }));
  const [listTransaction, setListTransaction] = useState<
    {date: string; data: GetTransactionListResponseType[]}[]
  >([]);

  const fetchTransactionList = async () => {
    try {
      const responseTransactionList = await getTransactionList(
        {typeHistory, valueQuery, walletId: wallet.id},
        user.token,
      );

      const groupDateObject = responseTransactionList.data.reduce(
        (
          totalValue: {[date: string]: GetTransactionListResponseType[]},
          currentValue,
        ) => {
          const date = currentValue.date.toString().split('T')[0];

          if (!totalValue[date]) {
            totalValue[date] = [];
          }
          totalValue[date].push(currentValue);

          return totalValue;
        },
        {},
      );

      const groupDateArray = Object.keys(groupDateObject).map(date => ({
        date,
        data: groupDateObject[date],
      }));

      setListTransaction(groupDateArray);
    } catch (error: any) {
      console.log('error', error.response.data.message);
      Alert.alert(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchTransactionList();
  }, []);

  return (
    <>
      <SafeAreaView edges={['top']} style={styles.safeAreaHeader} />
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>{`${
          typeHistory.charAt(0).toUpperCase() + typeHistory.slice(1)
        } transaction`}</Text>
      </View>
      <View style={styles.containerContent}>
        <SectionList
          contentContainerStyle={styles.containerSectionList}
          sections={listTransaction.reverse()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderSectionHeader={({section}) => {
            return (
              <View style={styles.containerHeaderSection}>
                <Text style={styles.textHeaderSection}>
                  {dayjs(section.date).format('DD/MM/YYYY')}
                </Text>
              </View>
            );
          }}
          renderItem={({item}) => {
            return <Transaction data={item} />;
          }}
          ListEmptyComponent={() => (
            <View style={styles.containerContentEmpty}>
              <Text style={styles.textEmptyList}>ไม่มีรายการที่บันทึก</Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default History;

const styles = StyleSheet.create({
  safeAreaHeader: {
    flex: 0,
    backgroundColor: COLORS.SOFT_BLUE,
  },

  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.SOFT_BLUE,
  },

  textHeader: {
    color: COLORS.PINK,
    fontFamily: FONTS.MITR_SEMI_BOLD,
    fontSize: 16,
  },

  containerContent: {
    flex: 1,
    backgroundColor: COLORS.WHITE,

    paddingBottom: 30,
  },

  containerSectionList: {
    flex: 1,
  },

  containerContentEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textEmptyList: {
    fontFamily: FONTS.MITR_REGULAR,
    fontSize: 14,
    color: COLORS.BLACK,
  },

  containerHeaderSection: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: COLORS.WHITE,
  },

  textHeaderSection: {
    fontSize: 14,
    fontFamily: FONTS.MITR_MEDIUM,
    color: COLORS.PINK,
  },
});

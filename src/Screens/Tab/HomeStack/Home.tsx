import React, {useCallback} from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {useAppSelector, useAppDispatch} from '@Redux/hook';
import {useFocusEffect} from '@react-navigation/native';

import {getUserAction, getWalletAction} from '@Redux/Slices';
import {HeaderBarHome, Wallet, MenuCard} from '@Components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, KEY_LOCAL_STORAGE} from '@Constants';
import {getStoreData} from '@Helpers';

const Home = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.user);
  const {wallet, isLoading} = useAppSelector(state => state.wallet);

  const menuList = [
    {menuTitle: 'To Day Transaction', data: {income: 100, expense: 300}},
    {menuTitle: 'Month Transaction', data: {income: 10000, expense: 5000}},
    {menuTitle: 'Month Transaction', data: {income: 10000, expense: 5000}},
  ];

  const getUser = async (token: string) => {
    try {
      await dispatch(getUserAction(token)).unwrap();
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const getWalletUser = async (token: string) => {
    try {
      await dispatch(getWalletAction(token));
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const getUserInfo = async () => {
    const token = await getStoreData(KEY_LOCAL_STORAGE.TOKEN);

    if (token) {
      await getUser(token);
      await getWalletUser(token);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getUserInfo();
    }, []),
  );

  return (
    <>
      <SafeAreaView edges={['top']} style={styles.safeAreaViewTop} />
      <HeaderBarHome
        name={user.username}
        description="วันนี้กินให้น้อยๆ"
        imageProfile="https://reactnative.dev/img/tiny_logo.png"
      />

      <View style={styles.containerContent}>
        <View style={styles.positionWallet}>
          {isLoading ? (
            <View
              style={{
                height: 100,
                width: '100%',
                backgroundColor: 'red',
              }}
            />
          ) : (
            <Wallet walletName={wallet.walletName} balance={wallet.balance} />
          )}
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          // refreshControl={
          //   <RefreshControl refreshing={true} onRefresh={() => null} />
          // }
          style={styles.containerScrollView}>
          {menuList.map((menu, index) => (
            <MenuCard
              key={index}
              menuTitle={menu.menuTitle}
              dataTransaction={menu.data}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaViewTop: {
    flex: 0,
    backgroundColor: COLORS.SOFT_BLUE,
  },

  containerContent: {
    flex: 1,
    width: '100%',
    marginTop: -50,
    alignItems: 'center',

    marginBottom: 50,
    paddingBottom: 30,
    backgroundColor: COLORS.WHITE,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 15,
  },

  positionWallet: {
    width: '80%',
    alignItems: 'center',
    marginTop: -50,
  },

  containerScrollView: {
    width: '100%',
    paddingBottom: 10,
    marginTop: 20,
    padding: 1,
  },
});

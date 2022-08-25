import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {HeaderBar, Transaction} from '@Components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '@Constants';

const History: React.FC<any> = ({route, navigation}) => {
  const {typeHistory} = route.params;
  console.log('typeHistory', typeHistory);

  return (
    <>
      <SafeAreaView edges={['top']} style={styles.safeAreaHeader} />
      <HeaderBar />
      <View style={styles.containerContent}>
        <ScrollView contentContainerStyle={styles.containerScrollView}>
          <Transaction />
        </ScrollView>
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

  containerContent: {
    flex: 1,
    // backgroundColor: COLORS.DARK_GRAY,
    backgroundColor: COLORS.WHITE,

    paddingBottom: 30,
  },

  containerScrollView: {
    padding: 15,
  },
});

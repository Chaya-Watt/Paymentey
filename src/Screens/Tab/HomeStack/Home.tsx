import React from 'react';

import {HeaderBar} from '@Components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '@Constants';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <>
      <SafeAreaView edges={['top']} style={styles.safeAreaViewTop} />
      <HeaderBar
        name="Chayanant Watt"
        description="วันนี้กินให้น้อยๆ"
        imageProfile="https://reactnative.dev/img/tiny_logo.png"
      />
      {/* <SafeAreaView
        edges={['right', 'bottom', 'left']}
        style={styles.containerContent}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{padding: 5}}>
          <View
            style={{
              width: '100%',
              minHeight: 150,
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 2,
            }}>
            <Text>Wallet :</Text>
          </View>
        </ScrollView>
      </SafeAreaView> */}
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
    backgroundColor: COLORS.WHITE,
    padding: 15,
  },
});

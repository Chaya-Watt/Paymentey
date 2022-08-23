import React from 'react';
import {Text, View} from 'react-native';

const History: React.FC<any> = ({route, navigation}) => {
  const {typeHistory} = route.params;
  console.log('typeHistory', typeHistory);
  return (
    <View>
      <Text>History</Text>
    </View>
  );
};

export default History;

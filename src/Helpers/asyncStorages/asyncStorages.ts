import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string | object) => {
  try {
    if (typeof value === 'string') {
      await AsyncStorage.setItem(key, value);
    } else {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    }
  } catch (error: any) {
    Alert.alert('error storeData', error);
  }
};

export const getStoreData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);

    return value;
  } catch (error: any) {
    Alert.alert('error getData', error);
  }
};

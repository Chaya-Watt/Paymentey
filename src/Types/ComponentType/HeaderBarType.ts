import {ImageSourcePropType} from 'react-native';

export interface TypeHeaderBarHome {
  imageProfile?: string;
  name: string;
  description: string;
  onPress: () => void;
}
export interface TypeHeaderBar {
  icon: ImageSourcePropType;
  headerTitle: string;
  title: string;
  headerDescription: string;
  description: string | number;
}

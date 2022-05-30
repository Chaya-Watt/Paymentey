import {ImageSourcePropType} from 'react-native';

export interface TypeHeaderBarHome {
  imageProfile?: string;
  name: string;
  description: string;
}
export interface TypeHeaderBar {
  icon: ImageSourcePropType;
  headerTitle: string;
  title: string;
  headerDescription: string;
  description: string | number;
}

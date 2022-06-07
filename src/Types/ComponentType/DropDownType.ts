import {ImageSourcePropType} from 'react-native';

export interface TypeDropDownProps {
  icon: ImageSourcePropType;
  listSelect: TypeListOfDropDown[];
  onPress: () => void;
  placeholder: string;
  selected?: TypeListOfDropDown;
  isOpen: boolean;
  onSelect: (item: TypeListOfDropDown) => void;
  customStyle?: any;
}

export interface TypeListOfDropDown {
  id: string | number;
  label: string;
  value: string | number;
  [key: string]: string | number;
}
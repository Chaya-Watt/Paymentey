import {ImageSourcePropType} from 'react-native';

export interface TypeDropDownProps {
  icon: ImageSourcePropType;
  label?: string;
  listSelect: TypeListOfDropDown[];
  onPress: () => void;
  placeholder: string;
  selected?: TypeListOfDropDown;
  isOpen: boolean;
  onSelect: (item: TypeListOfDropDown) => void;
  customStyleContainer?: any;
  customStyleDropDownColor?: any;
  isError: boolean;
  textError: string;
}

export interface TypeListOfDropDown {
  id: string | number;
  label: string;
  value: string | number;
  [key: string]: string | number;
}

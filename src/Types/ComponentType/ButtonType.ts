export interface TypeButton {
  title: string;
  onPress: () => void;
  customStyleContainer?: any;
  customStyleText?: any;
}

export interface TypeButtonLink {
  title: string;
  onPress: () => void;
  customStyleContainer?: any;
  customStyleText?: any;
}

export interface TypeButtonDate {
  date: string;
  onPressIcon: () => void;
}

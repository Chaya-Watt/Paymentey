export interface TypeTextInputField {
  label: string;
  value: string;
  placeholder?: string;
  customStyle?: any;
  onChangeText: (value: string, name?: string) => void;
}

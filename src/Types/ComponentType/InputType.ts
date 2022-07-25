export interface TypeTextInputField {
  label: string;
  value: string;
  placeholder?: string;
  customStyle?: any;
  isError?: boolean;
  textError?: string;
  onChangeText: (value: string, name?: string) => void;
}

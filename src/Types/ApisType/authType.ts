export interface LoginRequestDataType {
  email: string;
  password: string;
}

export interface RegisterRequestDataType {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

export interface LoginRequestDataType {
  email: string;
  password: string;
}

export interface LoginResponseDataType {
  response: object;
  token: string;
}

export interface RegisterRequestDataType {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

export interface RegisterResponseDataType {
  response: object;
  token: string;
}

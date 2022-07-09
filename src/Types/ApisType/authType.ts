import {UserType} from '@Types';

export interface LoginRequestDataType {
  email: string;
  password: string;
}

export interface LoginResponseDataType extends UserType {
  token: string;
}

export interface RegisterRequestDataType {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

export interface RegisterResponseDataType extends UserType {
  token: string;
}

import service from '../service';
import ENDPOINT from '../endpoint';
import {
  RegisterResponseDataType,
  RegisterRequestDataType,
  LoginRequestDataType,
  LoginResponseDataType,
  UserType,
} from '@Types';

export const login = async (payload: LoginRequestDataType) => {
  const url = ENDPOINT.AUTH.LOGIN;
  const method = 'POST';

  const response = await service<LoginResponseDataType, LoginRequestDataType>({
    url,
    method,
    data: payload,
  });

  return response;
};

export const signup = async (payload: RegisterRequestDataType) => {
  const url = ENDPOINT.AUTH.REGISTER;
  const method = 'POST';

  const response = await service<
    RegisterResponseDataType,
    RegisterRequestDataType
  >({
    url,
    method,
    data: payload,
  });

  return response;
};

export const getUser = async (token: string) => {
  const url = ENDPOINT.AUTH.GET_USER;
  const method = 'GET';

  const headers = {
    Authorization: 'Bearer ' + token,
  };

  const response = await service<UserType & {token: string}, string>({
    url,
    method,
    headers,
  });

  return response;
};

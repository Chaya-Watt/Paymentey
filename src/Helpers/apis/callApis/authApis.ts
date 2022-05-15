import service from '../service';
import ENDPOINT from '../endpoint';
import {
  RegisterResponseDataType,
  RegisterRequestDataType,
  LoginRequestDataType,
  LoginResponseDataType,
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

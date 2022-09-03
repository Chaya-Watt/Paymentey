import {createAsyncThunk} from '@reduxjs/toolkit';

import {login, storeData, getUser, signup} from '@Helpers';
import {KEY_LOCAL_STORAGE} from '@Constants';
import {
  LoginRequestDataType,
  LoginResponseDataType,
  RegisterRequestDataType,
  RegisterResponseDataType,
  UserType,
} from '@Types';

export const loginAction = createAsyncThunk<
  LoginResponseDataType,
  LoginRequestDataType,
  {rejectValue: any}
>('user/login', async (payload: LoginRequestDataType, {rejectWithValue}) => {
  try {
    const response = await login(payload);

    await storeData(KEY_LOCAL_STORAGE.TOKEN, response.data.token);

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const signUpAction = createAsyncThunk<
  RegisterResponseDataType,
  RegisterRequestDataType,
  {rejectValue: any}
>(
  'user/signUp',
  async (payload: RegisterRequestDataType, {rejectWithValue}) => {
    try {
      const response = await signup(payload);

      await storeData(KEY_LOCAL_STORAGE.TOKEN, response.data.token);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getUserAction = createAsyncThunk<
  UserType & {token: string},
  string,
  {rejectValue: any}
>('user/getUser', async (token, {rejectWithValue}) => {
  try {
    const response = await getUser(token);

    return {...response.data, token};
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

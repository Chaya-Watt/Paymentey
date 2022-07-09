import {
  LoginRequestDataType,
  LoginResponseDataType,
} from '../../../Types/ApisType/authType';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {login, storeData, getUser} from '@Helpers';
import {KEY_LOCAL_STORAGE} from '@Constants';
import {UserType} from '@Types';

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

export const getUserAction = createAsyncThunk<
  UserType & {token: string},
  string,
  {rejectValue: any}
>('user/getUser', async (token, {rejectWithValue}) => {
  try {
    const response = await getUser(token);

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

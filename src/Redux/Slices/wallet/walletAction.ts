import {getWallet} from '@Helpers';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {WalletResponseType} from '@Types';

export const getWalletAction = createAsyncThunk<
  WalletResponseType,
  string,
  {rejectValue: any}
>('get/wallet', async (token: string, {rejectWithValue}) => {
  try {
    const response = await getWallet(token);

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

import {STATUS} from '@Constants';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WalletResponseType, WalletType} from '@Types';
import {getWalletAction} from './walletAction';

interface walletInitialState {
  wallet: WalletType;
  allWallet: WalletType[];
  isLoading: boolean;
  status: string | null;
  messageError: string;
}

const initialState: walletInitialState = {
  wallet: {
    id: '',
    creator: '',
    balance: 0,
    walletName: '',
  },
  allWallet: [
    {
      id: '',
      creator: '',
      balance: 0,
      walletName: '',
    },
  ],
  isLoading: true,
  status: null,
  messageError: '',
};

const walletSlice = createSlice({
  name: 'walletSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [getWalletAction.pending.type]: state => {
      state.isLoading = true;
      state.status = STATUS.PENDING;
    },
    [getWalletAction.fulfilled.type]: (
      state,
      action: PayloadAction<WalletResponseType[]>,
    ) => {
      state.status = STATUS.SUCCESS;
      state.wallet = action.payload[0];
      state.allWallet = action.payload;
      state.isLoading = false;
    },
    [getWalletAction.rejected.type]: (state, action) => {
      state.status = STATUS.FAILED;
      state.messageError = action.message;
      state.isLoading = false;
    },
  },
});

export default walletSlice.reducer;

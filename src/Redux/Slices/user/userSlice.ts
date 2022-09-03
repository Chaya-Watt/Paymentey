import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {loginAction, getUserAction, signUpAction} from './userAction';
import {STATUS} from '@Constants';
import {
  LoginResponseDataType,
  UserType,
  RegisterResponseDataType,
} from '@Types';

interface userInitialState {
  user: UserType & {token: string};
  isLoading: boolean;
  status: string | null;
  messageError: string;
}

const initialState: userInitialState = {
  user: {id: '', email: '', username: '', token: ''},
  isLoading: false,
  status: null,
  messageError: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: {
    //login action
    [loginAction.pending.type]: (state: userInitialState) => {
      state.status = STATUS.PENDING;
      state.isLoading = true;
    },
    [loginAction.fulfilled.type]: (
      state: userInitialState,
      action: PayloadAction<LoginResponseDataType>,
    ) => {
      state.status = STATUS.SUCCESS;
      state.user = action.payload;
      state.isLoading = false;
    },
    [loginAction.rejected.type]: (
      state: userInitialState,
      action: PayloadAction<{message: string}>,
    ) => {
      state.status = STATUS.FAILED;
      state.messageError = action.payload.message;
      state.isLoading = false;
    },

    //get user action
    [getUserAction.pending.type]: state => {
      state.status = STATUS.PENDING;
      state.isLoading = true;
    },
    [getUserAction.fulfilled.type]: (
      state,
      action: PayloadAction<UserType & {token: string}>,
    ) => {
      state.status = STATUS.SUCCESS;
      state.user = action.payload;
      state.isLoading = false;
    },
    [getUserAction.rejected.type]: (
      state,
      action: PayloadAction<{message: string}>,
    ) => {
      state.status = STATUS.FAILED;
      state.messageError = action.payload.message;
      state.isLoading = false;
    },

    //signup action
    [signUpAction.pending.type]: state => {
      state.status = STATUS.PENDING;
      state.isLoading = true;
    },
    [signUpAction.fulfilled.type]: (
      state,
      action: PayloadAction<RegisterResponseDataType>,
    ) => {
      state.status = STATUS.SUCCESS;
      state.user = action.payload;
      state.isLoading = false;
    },
    [signUpAction.rejected.type]: (
      state,
      action: PayloadAction<{message: string}>,
    ) => {
      state.status = STATUS.FAILED;
      state.messageError = action.payload.message;
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;

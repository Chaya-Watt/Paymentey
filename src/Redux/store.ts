import {configureStore} from '@reduxjs/toolkit';
import userReducer from './Slices/user/userSlice';
import transactionReducer from './Slices/transaction/transactionSlice';
import walletReducer from './Slices/wallet/walletSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    transaction: transactionReducer,
    wallet: walletReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

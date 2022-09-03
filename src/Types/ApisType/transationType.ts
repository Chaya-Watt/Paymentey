import {TransactionType} from '@Types';

export interface CreateTransactionRequestType extends TransactionType {}

export interface GetSummaryTransactionRequestType {
  week: number;
  month: number;
  walletId: string;
}

export interface GetTransactionListRequestType {
  typeHistory: string;
  valueQuery: string | number;
  walletId: string;
}

export interface GetTransactionListResponseType {
  id: string;
  typeOfTransaction: string;
  topic: string;
  amount: number;
  date: Date;
  note?: string;
}

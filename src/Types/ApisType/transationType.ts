export interface CreateTransactionRequestType {
  creator: string;
  walletId: string;
  typeOfTransaction: string | number;
  topic: string;
  amount: number;
  date: Date;
  note?: string;
}

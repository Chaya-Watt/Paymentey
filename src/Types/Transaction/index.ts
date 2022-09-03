export interface TransactionType {
  creator: string;
  walletId: string;
  typeOfTransaction: string;
  topic: string;
  amount: number;
  date: Date;
  note?: string;
}

export enum TransactionType {
  INCOMING,
  OUTGOING,
}

export interface ITransaction {
  uid: string;
  note: string;
  amount: string;
  type: string;
  to: string;
  createdOn: string;
}

export interface GetTransactionsResponse {
  data: ITransaction[];
  total: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;
  lastPage: number;
}

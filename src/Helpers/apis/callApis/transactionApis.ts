import service from '../service';
import ENDPOINT from '../endpoint';
import {
  CreateTransactionRequestType,
  GetSummaryTransactionRequestType,
  GetTransactionListRequestType,
  GetTransactionListResponseType,
} from '@Types';

export const createTransaction = async (
  payload: CreateTransactionRequestType,
  token: string,
) => {
  const method = 'POST';
  const url = ENDPOINT.TRANSACTION.CREATE;
  const headers = {
    Authorization: 'Bearer ' + token,
  };

  const response = await service<any, CreateTransactionRequestType>({
    method,
    url,
    headers,
    data: payload,
  });

  return response;
};

export const getSummaryTransaction = async (
  payload: GetSummaryTransactionRequestType,
  token: string,
) => {
  const method = 'GET';
  const url = ENDPOINT.TRANSACTION.GET_SUMMARY;
  const headers = {
    Authorization: 'Bearer ' + token,
  };

  const response = await service<any, GetSummaryTransactionRequestType>({
    method,
    url,
    headers,
    params: payload,
  });

  return response;
};

export const getTransactionList = async (
  payload: GetTransactionListRequestType,
  token: string,
) => {
  const method = 'GET';
  const url = ENDPOINT.TRANSACTION.GET_TRANSACTION_LIST;
  const headers = {
    Authorization: 'Bearer ' + token,
  };

  const response = await service<
    GetTransactionListResponseType[],
    GetTransactionListRequestType
  >({
    method,
    url,
    headers,
    params: payload,
  });

  return response;
};

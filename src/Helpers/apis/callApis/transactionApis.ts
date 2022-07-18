import service from '../service';
import ENDPOINT from '../endpoint';
import {CreateTransactionRequestType} from '@Types';

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

  console.log('response', response);
  return response;
};

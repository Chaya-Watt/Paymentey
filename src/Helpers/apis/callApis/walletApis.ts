import {WalletResponseType} from '@Types';
import ENDPOINT from '../endpoint';
import service from '../service';

export const getWallet = async (token: string) => {
  const url = ENDPOINT.WALLET.GET_WALLET;
  const method = 'GET';
  const headers = {
    Authorization: 'Bearer ' + token,
  };

  const response = await service<WalletResponseType, any>({
    url,
    method,
    headers,
  });

  return response;
};

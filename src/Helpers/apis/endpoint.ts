const ENDPOINT = {
  AUTH: {
    GET_USER: '/user',
    LOGIN: '/user/login',
    REGISTER: '/user/signup',
  },
  TRANSACTION: {
    CREATE: '/transaction/create',
    GET_TRANSACTION_LIST: '/transaction',
    GET_SUMMARY: '/transaction/summary',
  },
  WALLET: {
    GET_WALLET: '/wallet',
    CREATE: '/wallet/create',
    EDIT: '/wallet/edit',
  },
};

export default ENDPOINT;

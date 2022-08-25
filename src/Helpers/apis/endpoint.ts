const ENDPOINT = {
  AUTH: {
    GET_USER: '/user',
    LOGIN: '/user/login',
    REGISTER: '/user/signup',
  },
  TRANSACTION: {
    GET_SUMMARY: '/transaction/summary',
    CREATE: '/transaction/create',
  },
  WALLET: {
    GET_WALLET: '/wallet',
    CREATE: '/wallet/create',
    EDIT: '/wallet/edit',
  },
};

export default ENDPOINT;

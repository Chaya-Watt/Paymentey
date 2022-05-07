import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParams = {
  AuthStack: NavigatorScreenParams<AuthStackParams>;
  TabStack: NavigatorScreenParams<TabStackParams>;
};

export type AuthStackParams = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type TabStackParams = {
  HomeStack: undefined;
  CreateTransaction: undefined;
  Setting: undefined;
};

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
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  CreateTransaction: undefined;
  Setting: undefined;
};

export type HomeStackParams = {
  Home: undefined;
  History: {typeHistory: string};
};

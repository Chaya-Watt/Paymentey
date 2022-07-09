/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import Routers from './src/Routers';
import store from './src/Redux/store';

const ReactApp = () => (
  <Provider store={store}>
    <Routers />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReactApp);

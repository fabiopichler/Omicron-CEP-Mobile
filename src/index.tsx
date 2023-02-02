import './declare-modules.d.ts';

import 'moment-timezone';
import 'moment/locale/pt-br';

import React from 'react';
import moment from 'moment';
import Moment from 'react-moment';

import { AppRegistry } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';

import App from './app/App';

import { store } from './store/store';
import { name as appName } from '../app.json';

Moment.globalMoment = moment;
Moment.globalLocale = 'pt-br';
Moment.globalLocal = true;

const Main: React.FC = () => (
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
);

AppRegistry.registerComponent(appName, () => Main);

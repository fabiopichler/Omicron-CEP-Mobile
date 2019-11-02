import './declare-modules.d.ts';

import 'react-native-gesture-handler'; // <-- RTA 😱 (Recurso Técnico Alternativo) por causa dum bug doido 🤪 no treco bugado 🙈
import 'moment-timezone';
import 'moment/locale/pt-br';

import React from 'react';
import moment from 'moment';
import Moment from 'react-moment';

import { AppRegistry } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import App from './app/App';

import { store } from './store/store';
import { theme } from './themes/theme';

Moment.globalMoment = moment;
Moment.globalLocale = 'pt-br';
Moment.globalLocal = true;

const Index: React.FC = () => (
    <StoreProvider store={store}>
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    </StoreProvider>
);

AppRegistry.registerComponent('OmicronCEP', () => Index);

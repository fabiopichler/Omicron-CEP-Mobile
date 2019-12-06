import React from 'react';

import { StatusBar } from 'react-native';

import AppNavigator from './appNavigator/AppNavigator';

import { AppContainer } from './AppContainer';
import { IAppProps } from './IAppProps';

const App: React.FC<IAppProps> = props => {
    const { cepInit, addressInitHistory } = props;

    React.useEffect(() => {
        StatusBar.setTranslucent(true);

        cepInit();
        addressInitHistory();
    }, []);

    return (
        <AppNavigator />
    );
};

export default AppContainer(App);

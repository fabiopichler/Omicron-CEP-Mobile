import React from 'react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import AppNavigator from './appNavigator/AppNavigator';

import { AppContainer } from './AppContainer';
import { IAppProps } from './IAppProps';
import { defaultTheme, darkTheme } from '@/themes/theme';

const App: React.FC<IAppProps> = ({
    systemState: {
        darkModeEnabled,
    },
    systemInit,
    cepInit,
    addressInitHistory,
}) => {

    React.useEffect(() => {
        StatusBar.setTranslucent(true);

        systemInit();
        cepInit();
        addressInitHistory();
    }, []);

    React.useEffect(() => {
        if (darkModeEnabled !== null) {
            const theme = darkModeEnabled ? darkTheme : defaultTheme;

            (changeNavigationBarColor as any)(theme.colors.primary, false, false);
        }
    }, [darkModeEnabled]);

    if (darkModeEnabled === null)
        return null;

    return (
        <PaperProvider
            theme={darkModeEnabled ? darkTheme : defaultTheme}
        >
            <AppNavigator />
        </PaperProvider>
    );
};

export default AppContainer(App);

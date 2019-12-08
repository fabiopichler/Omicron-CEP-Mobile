import React from 'react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import AppNavigator from './appNavigator/AppNavigator';

import { AppContainer } from './AppContainer';
import { IAppProps } from './IAppProps';
import { defaultTheme, darkTheme, ITheme } from '@/themes/theme';

const App: React.FC<IAppProps> = ({
    cepInit,
    addressInitHistory,
}) => {

    const [theme, setTheme] = React.useState<ITheme | null>(null);

    React.useEffect(() => {
        StatusBar.setTranslucent(true);

        setTheme(defaultTheme);

        cepInit();
        addressInitHistory();
    }, []);

    React.useEffect(() => {
        if (theme)
            (changeNavigationBarColor as any)(theme.colors.primary, false, false);
    }, [theme]);

    if (!theme)
        return null;

    return (
        <PaperProvider theme={theme}>
            <AppNavigator />
        </PaperProvider>
    );
};

export default AppContainer(App);

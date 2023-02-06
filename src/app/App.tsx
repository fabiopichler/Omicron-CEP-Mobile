import React from 'react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { StatusBar, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppNavigator from './appNavigator/AppNavigator';

import { AppContainer } from './AppContainer';
import { IAppProps } from './IAppProps';
import { defaultTheme } from '@/themes/defaultTheme';
import { darkTheme } from '@/themes/darkTheme';

const App: React.FC<IAppProps> = ({
    systemState: {
        darkModeEnabled,
    },
    systemInit,
    cepInit,
    addressInitHistory,
}) => {

    const theme = darkModeEnabled ? darkTheme : defaultTheme;

    React.useEffect(() => {
        StatusBar.setTranslucent(true);

        systemInit();
        cepInit();
        addressInitHistory();
    }, []);

    React.useEffect(() => {
        if (darkModeEnabled !== null)
            changeNavigationBarColor(theme.colors.primary, false, false);
    }, [darkModeEnabled]);

    if (darkModeEnabled === null)
        return null;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PaperProvider
                theme={theme}
            >
                <View style={{ flex: 1, backgroundColor: theme.colors.primary }}>
                    <AppNavigator />
                </View>
            </PaperProvider>
        </GestureHandlerRootView>
    );
};

export default AppContainer(App);

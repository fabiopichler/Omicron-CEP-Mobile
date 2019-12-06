import React from 'react';

import { StyleSheet, View, StatusBar } from 'react-native';

import AppNavigator from './appNavigator/AppNavigator';

import { AppContainer } from './AppContainer';
import { IAppProps } from './IAppProps';

const styles = StyleSheet.create({
    root: {
        flexGrow: 1,
    }
});

const App: React.FC<IAppProps> = props => {
    const { cepInit, addressInitHistory } = props;

    React.useEffect(() => {
        StatusBar.setTranslucent(true);

        cepInit();
        addressInitHistory();
    }, []);

    return (
        <View style={styles.root}>
            <AppNavigator />
        </View>
    );
};

export default AppContainer(App);

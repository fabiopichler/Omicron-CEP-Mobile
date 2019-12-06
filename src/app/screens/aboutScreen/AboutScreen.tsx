import * as React from 'react';

import { Dimensions, StyleSheet } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useTheme } from 'react-native-paper';

import AppHeader from '@/app/appHeader/AppHeader';
import AboutSceneTab from './aboutSceneTab/AboutSceneTab';
import LicenseSceneTab from './licenseSceneTab/LicenseSceneTab';

const styles = StyleSheet.create({
    indicatorStyle: {
        backgroundColor: 'white',
    },
    labelStyle: {
        fontWeight: 'bold',
    }
});

const AboutScreen: React.FC<NavigationStackScreenProps> = () => {

    const { colors } = useTheme();

    const [state, setState] = React.useState({
        index: 0,
        routes: [
            { key: 'about', title: 'Sobre' },
            { key: 'license', title: 'Licença' },
        ],
    });

    return (
        <>
            <AppHeader
                title="Sobre o App"
                noShadow
            />

            <TabView
                style={{ backgroundColor: colors.background }}
                navigationState={state}
                renderScene={SceneMap({
                    about: AboutSceneTab,
                    license: LicenseSceneTab,
                })}
                onIndexChange={index => setState({ ...state, index })}
                initialLayout={{ width: Dimensions.get('window').width }}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        style={{ backgroundColor: colors.primary }}
                        indicatorStyle={styles.indicatorStyle}
                        labelStyle={styles.labelStyle}
                        activeColor="white"
                    />
                )}
            />
        </>
    );
};

export default AboutScreen;

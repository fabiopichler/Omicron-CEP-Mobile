import React from 'react';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { View, StyleSheet, ScrollView } from 'react-native';
import { Headline, Switch, Text } from 'react-native-paper';

import Logo from '@/assets/images/logo.svg';
import AppHeader from '@/app/components/appHeader/AppHeader';
import HomeDrawer from './homeDrawer/HomeDrawer';
import HomeButton from './homeButton/HomeButton';

import { useTheme } from '@/themes/theme';
import { IHomeScreenProps } from './IHomeScreenProps';
import { HomeScreenContainer } from './HomeScreenContainer';

const styles = StyleSheet.create({
    root: {
        flexGrow: 1,
    },
    scrollView: {
        flexGrow: 1,
    },
    titleStyle: {
        textAlign: 'right',
        lineHeight: 21,
    },
    darkModeSwitch: {
        marginRight: 8,
    },
    wrapper: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoTitle: {
        color: 'white',
        fontSize: 26,
        marginTop: 14,
        marginBottom: 10,
    },
    footer: {
        padding: 16,
    },
    textfooter: {
        color: 'rgba(255,255,255,.8)',
        textAlign: 'center',
    }
});

const HomeScreen: React.FC<IHomeScreenProps> = ({
    navigation,
    systemState: {
        darkModeEnabled,
    },
    changeDarkMode,
}) => {
    const { colors, customColors } = useTheme();

    const drawerRef = React.useRef<DrawerLayout>(null);

    const openDrawer = () => {
        if (drawerRef.current)
            drawerRef.current.openDrawer();
    }

    return (
        <HomeDrawer
            ref={drawerRef}
            navigation={navigation}
        >
            <View style={[styles.root, { backgroundColor: colors.primary }]}>
                <AppHeader
                    title="Modo escuro"
                    titleStyle={styles.titleStyle}
                    noShadow
                    noMenu
                    onDrawerOpen={openDrawer}
                    contentRight={
                        <Switch
                            value={darkModeEnabled!}
                            onValueChange={changeDarkMode}
                            color={customColors.title}
                            style={styles.darkModeSwitch}
                        />
                    }
                />

                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollView}
                >
                    <View style={styles.wrapper}>
                        <Logo
                            width={90}
                            height={90}
                        />

                        <Headline style={styles.logoTitle}>
                            Omicron CEP
                        </Headline>

                        <HomeButton
                            icon={FontAwesome5}
                            iconName="search"
                            iconSize={13}
                            onPress={() => navigation.navigate('Cep')}
                        >
                            CEP
                        </HomeButton>

                        <HomeButton
                            icon={MaterialCommunityIcons}
                            iconName="map-search"
                            iconSize={18}
                            onPress={() => navigation.navigate('Address')}
                        >
                            Endereço
                        </HomeButton>
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.textfooter}>
                            &copy; 2019, Fábio Pichler
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </HomeDrawer>
    );
};

export default HomeScreenContainer(HomeScreen);

import React from 'react';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { View, Text, StyleSheet } from 'react-native';
import { Headline, useTheme } from 'react-native-paper';

import Logo from '@/assets/images/logo.svg';
import AppHeader from '@/app/appHeader/AppHeader';
import HomeDrawer from './homeDrawer/HomeDrawer';
import HomeButton from './homeButton/HomeButton';

const styles = StyleSheet.create({
    root: {
        flexGrow: 1,
        flexDirection: 'column',
    },
    logoContainer: {
        flexGrow: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logoTitle: {
        color: 'white',
        fontSize: 26,
        marginTop: 14,
        marginBottom: 10,
    },
    wrapper: {
        flexGrow: 3,
        flexDirection: 'column',
        alignItems: 'center',
    },
    footer: {
        padding: 16,
    },
    textfooter: {
        color: 'rgba(255,255,255,.8)',
        textAlign: 'center',
    }
});

const HomeScreen: React.FC<NavigationStackScreenProps> = props => {
    const { navigation } = props;
    const { colors } = useTheme();

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
                    title=""
                    noShadow
                    noMenu
                    onDrawerOpen={openDrawer}
                />

                <View style={styles.logoContainer}>
                    <Logo
                        width={90}
                        height={90}
                    />

                    <Headline style={styles.logoTitle}>
                        Omicron CEP
                    </Headline>
                </View>

                <View style={styles.wrapper}>
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
            </View>
        </HomeDrawer>
    );
};

export default HomeScreen;

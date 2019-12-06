import React from 'react';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Headline, useTheme } from 'react-native-paper';

import Logo from '@/assets/images/logo.svg';
import AppHeader from '@/app/appHeader/AppHeader';
import HomeDrawer from './homeDrawer/HomeDrawer';
import HomeButton from './homeButton/HomeButton';

const styles = StyleSheet.create({
    root: {
        flexGrow: 1,
    },
    scrollView: {
        flexGrow: 1,
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

const HomeScreen: React.FC<NavigationStackScreenProps> = ({
    navigation,
}) => {
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

export default HomeScreen;

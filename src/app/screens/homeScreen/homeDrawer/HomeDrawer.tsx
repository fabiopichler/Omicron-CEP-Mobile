import React from 'react';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

import { View, ScrollView, StyleSheet, Text, Platform, Animated } from 'react-native';
import { Title } from 'react-native-paper';

import MenuList from '@/app/components/menuList/MenuList';
import Logo from '@/assets/images/logo.svg';

import { Config } from '@/config';
import { statusBarCurrentHeight } from '@/helpers/system';
import { IHomeDrawerProps } from './IHomeDrawerProps';
import { useTheme } from '@/themes/theme';

const styles = StyleSheet.create({
    drawerAnimatedView: {
        flexGrow: 1,
        position: 'relative',
    },
    drawerTopBar: {
        position: 'absolute',
        width: '100%',
        height: statusBarCurrentHeight,
        backgroundColor: 'rgba(0,0,0,.2)',
        top: 0,
        right: 0,
        zIndex: 1,
    },
    drawerScrollView: {
        flexGrow: 1,
    },
    drawerScrollViewContainer: {
        flexGrow: 1,
    },
    drawerHeader: {
        height: 176 + statusBarCurrentHeight,
        marginBottom: 8,
        paddingTop: statusBarCurrentHeight,
    },
    drawerHeaderContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerTitle: {
        marginTop: 6,
        marginBottom: 0,
        color: 'white',
        fontSize: 24,
    },
    drawerSubtitle: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
    },
    drawerViewMenuList: {
        flexGrow: 1,
    },
    drawerFooter: {
        alignItems: 'center',
        padding: 12,
    },
    drawerFooterText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

const HomeDrawer = React.forwardRef<DrawerLayout, IHomeDrawerProps>(({
    children,
}, ref) => {

    const {
        customColors,
    } = useTheme();

    const drawerHeader = {
        backgroundColor: customColors.primaryDark,
    };

    const textSecondary = {
        color: customColors.textSecondary,
    };

    const closeDrawer = () => {
        const drawerRef = ref as React.RefObject<DrawerLayout>;

        if (drawerRef && drawerRef.current)
            drawerRef.current.closeDrawer();
    }

    const renderDrawer = (progressValue: Animated.Value) => {
        const parallax = progressValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-70, 0],
        });

        const animatedStyles = {
            transform: [{ translateX: parallax }],
        };

        return (
            <Animated.View style={[animatedStyles, styles.drawerAnimatedView]}>
                <View style={styles.drawerTopBar} />

                <ScrollView
                    style={styles.drawerScrollView}
                    contentContainerStyle={styles.drawerScrollViewContainer}
                >
                    <View style={[styles.drawerHeader, drawerHeader]}>
                        <View style={styles.drawerHeaderContent}>
                            <Logo width={80} height={80} />

                            <Title style={styles.drawerTitle}>Omicron CEP</Title>

                            <Text style={styles.drawerSubtitle}>por Fábio Pichler</Text>
                        </View>
                    </View>

                    <View style={styles.drawerViewMenuList}>
                        <MenuList
                            onItemPress={() => closeDrawer()}
                        />
                    </View>

                    <View style={styles.drawerFooter}>
                        <Text style={[styles.drawerFooterText, textSecondary]}>
                            Versão {Config.appVersion}
                        </Text>
                    </View>
                </ScrollView>
            </Animated.View>
        );
    };

    return (
        <DrawerLayout
            ref={ref}
            drawerWidth={270}
            edgeWidth={40}
            drawerPosition="left"
            drawerType="back"
            keyboardDismissMode="on-drag"
            drawerBackgroundColor={customColors.backgroundSecondary}
            overlayColor="#00000000"
            renderNavigationView={renderDrawer}
            contentContainerStyle={
                Platform.select({
                    ios: {
                        shadowColor: '#000',
                        shadowOpacity: 0.5,
                        shadowOffset: { width: 0, height: 2 },
                        shadowRadius: 60,
                    },
                    android: {
                        elevation: 8,
                        backgroundColor: '#000',
                    },
                })
            }
        >
            {children}
        </DrawerLayout>
    );
});

export default HomeDrawer;

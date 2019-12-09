import React from 'react';

import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Appbar, Menu } from 'react-native-paper';

import MenuList from '../menuList/MenuList';

import { statusBarCurrentHeight } from '@/app/helpers/system';
import { IAppHeaderProps } from './IAppHeaderProps';

const styles = StyleSheet.create({
    action: {
        marginRight: 0,
    },
    content: {
        marginLeft: 0,
    },
    titleStyle: {
        fontSize: 18,
    },
});

const AppHeader: React.FC<IAppHeaderProps> = ({
    title,
    titleStyle,
    subtitle,
    subtitleStyle,
    contentRight,
    noLeft,
    noMenu,
    noShadow,
    onDrawerOpen,
    navigation,
}) => {

    const [menuVisible, setMenuVisible] = React.useState(false);

    return (
        <Appbar.Header
            style={{
                elevation: noShadow ? 0 : 4,
                marginTop: statusBarCurrentHeight,
            }}
        >
            {noLeft ? null : (
                onDrawerOpen ? (
                    <Appbar.Action
                        icon="menu"
                        color="white"
                        onPress={onDrawerOpen}
                        style={styles.action}
                    />
                ) : (
                    <Appbar.BackAction
                        onPress={() => { navigation.goBack() || navigation.navigate('Home') }}
                        style={styles.action}
                    />
                )
            )}

            <Appbar.Content
                title={title}
                titleStyle={[styles.titleStyle, titleStyle]}
                subtitle={subtitle}
                subtitleStyle={subtitleStyle}
                style={styles.content}
            />

            {contentRight}

            {noMenu ? null : (
                <Menu
                    onDismiss={() => setMenuVisible(false)}
                    visible={menuVisible}
                    style={{ marginTop: statusBarCurrentHeight }}
                    anchor={
                        <Appbar.Action
                            icon="dots-vertical"
                            color="white"
                            onPress={() => setMenuVisible(true)}
                        />
                    }
                >
                    <MenuList
                        navigation={navigation}
                        onItemPress={() => setMenuVisible(false)}
                    />
                </Menu>
            )}
        </Appbar.Header>
    );
};

export default withNavigation(AppHeader);

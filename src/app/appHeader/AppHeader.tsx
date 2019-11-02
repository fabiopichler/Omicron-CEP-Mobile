import React from 'react';

import { StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Appbar, Menu } from 'react-native-paper';

import MenuList from '../components/menuList/MenuList';

import { IAppHeaderProps } from './IAppHeaderProps';

const AppHeader: React.FC<IAppHeaderProps> = props => {
    const { navigation } = props;

    const [menuVisible, setMenuVisible] = React.useState(false);

    return (
        <Appbar.Header
            style={{
                elevation: props.noShadow ? 0 : 4,
                marginTop: StatusBar.currentHeight,
            }}
        >
            {props.noLeft ? null : (
                props.onDrawerOpen ? (
                    <Appbar.Action 
                        icon="menu"
                        color="white"
                        onPress={props.onDrawerOpen}
                    />
                ) : (
                    <Appbar.BackAction
                        onPress={() => { navigation.goBack() || navigation.navigate('Home') }}
                    />
                )
            )}

            <Appbar.Content
                title={props.title}
                titleStyle={props.titleStyle}
                subtitle={props.subtitle}
                subtitleStyle={props.subtitleStyle}
            />

            {props.noMenu ? null : (
                <Menu
                    onDismiss={() => setMenuVisible(false)}
                    visible={menuVisible}
                    style={{ marginTop: StatusBar.currentHeight }}
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

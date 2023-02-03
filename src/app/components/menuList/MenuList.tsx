import React from 'react';

import { Linking, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Menu, Divider } from 'react-native-paper';

import { IMenuListProps } from './IMenuListProps';

const MenuList: React.FC<IMenuListProps> = ({
    onItemPress,
}) => {

    const navigation = useNavigation();

    const handleNavigate = (routeName: string) => () => {
        onItemPress();
        navigation.navigate(routeName as never);
    }

    const handleOpenURL = (url: string) => () => {
        onItemPress();
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }

    return (
        <>
            <Menu.Item
                title="Sobre o App"
                leadingIcon="information"
                onPress={handleNavigate('About')}
            />

            <Menu.Item
                title="Versão Web"
                leadingIcon="web"
                onPress={handleOpenURL('https://projects.fabiopichler.net/omicron-cep/')}
            />

            <Divider />

            <Menu.Item
                title="Visitar o website oficial"
                leadingIcon="home"
                onPress={handleOpenURL('https://fabiopichler.net/omicron-cep')}
            />

            <Menu.Item
                title="Página no Facebook"
                leadingIcon="facebook"
                onPress={handleOpenURL('https://www.facebook.com/fabiopichler.net')}
            />

            <Menu.Item
                title="Perfil no Twitter"
                leadingIcon="twitter"
                onPress={handleOpenURL('https://twitter.com/FabioPichler')}
            />

            <Divider />

            <Menu.Item
                title="Sair"
                leadingIcon="window-close"
                onPress={() => BackHandler.exitApp()}
            />
        </>
    );
};

export default MenuList;

import React from 'react';

import { Linking, BackHandler } from 'react-native';
import { Menu, Divider } from 'react-native-paper';

import { IMenuListProps } from './IMenuListProps';

const MenuList: React.FC<IMenuListProps> = ({
    onItemPress,
    navigation,
}) => {

    const handleNavigate = (routeName: string) => () => {
        onItemPress();
        navigation.navigate(routeName);
    }

    const handleOpenURL = (url: string) => () => {
        onItemPress();
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }

    return (
        <>
            <Menu.Item
                title="Sobre o App"
                icon="information"
                onPress={handleNavigate('About')}
            />

            <Menu.Item
                title="Versão Web"
                icon="web"
                onPress={handleOpenURL('https://projects.fabiopichler.net/omicron-cep/')}
            />

            <Divider />

            <Menu.Item
                title="Visitar o website oficial"
                icon="home"
                onPress={handleOpenURL('https://fabiopichler.net/omicron-cep')}
            />

            <Menu.Item
                title="Página no Facebook"
                icon="facebook-box"
                onPress={handleOpenURL('https://www.facebook.com/fabiopichler.net')}
            />

            <Menu.Item
                title="Perfil no Twitter"
                icon="twitter"
                onPress={handleOpenURL('https://twitter.com/FabioPichler')}
            />

            <Divider />

            <Menu.Item
                title="Sair"
                icon="window-close"
                onPress={() => BackHandler.exitApp()}
            />
        </>
    );
};

export default MenuList;

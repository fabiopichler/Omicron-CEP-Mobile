import * as React from 'react';

import { Dimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useTheme } from 'react-native-paper';

import AppHeader from '@/app/appHeader/AppHeader';
import AddressSearchSceneTab from './addressSearchSceneTab/AddressSearchSceneTab';
import AddressHistorySceneTab from './addressHistorySceneTab/AddressHistorySceneTab';
import AddressSearchForm from './addressSearchForm/AddressSearchForm';

import { AddressScreenContainer } from './AddressScreenContainer';
import { IAddressScreenProps } from './IAddressScreenProps';

const styles = StyleSheet.create({
    indicatorStyle: {
        backgroundColor: 'white',
    },
    labelStyle: {
        fontWeight: 'bold',
    }
});

const AddressScreen: React.FC<IAddressScreenProps> = props => {
    const { onCheckByAddress } = props;
    const { colors } = useTheme();

    const [state, setState] = React.useState({
        index: 0,
        routes: [
            { key: 'address', title: 'Pesquisa' },
            { key: 'history', title: 'Histórico' },
        ],
    });

    return (
        <>
            <AppHeader
                title="Pesquisa por endereço"
                noShadow
            />

            <TabView
                style={{ backgroundColor: colors.background }}
                navigationState={state}
                renderScene={SceneMap({
                    address: AddressSearchSceneTab,
                    history: AddressHistorySceneTab,
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

            <AddressSearchForm
                index={state.index}
                onCheckByAddress={onCheckByAddress}
            />
        </>
    );
};

export default AddressScreenContainer(AddressScreen);

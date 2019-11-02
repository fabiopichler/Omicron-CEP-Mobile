import React from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';

import Title from '../../../components/title/Title';
import AddressContent from '../../../components/addressContent/AddressContent';
import Info from '../../../components/info/Info';

import { AddressHistorySceneTabContainer } from './AddressHistorySceneTabContainer';
import { IAddressHistorySceneTabProps } from './IAddressHistorySceneTabProps';

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        paddingHorizontal: 14,
        backgroundColor: '#e9eaeb',
    }
});

const AddressHistorySceneTab: React.FC<IAddressHistorySceneTabProps> = props => {
    const { addressState: { historyList }, addressDelete } = props;
    
    return (
        <>
            {historyList.length === 0 ? (
                <Info>
                    Você ainda não realizou pesquisas por endereço. Para começar, clique no botão de pesquisa, logo a baixo, e insira o endereço desejado.
                </Info>

            ) : (
                <ScrollView style={styles.scrollView}>
                    <View style={{ height: 16 }} />
                    
                    <Title
                        title="Histórico de pesquisas"
                        desc="Lista das últimas pesquisas realizadas"
                    />

                    {historyList.map((address, index) => (
                        <AddressContent
                            address={address}
                            key={index}
                            addressDelete={addressDelete}
                        />
                    ))}
                </ScrollView>
            )}
        </>
    );
};

export default AddressHistorySceneTabContainer(AddressHistorySceneTab);

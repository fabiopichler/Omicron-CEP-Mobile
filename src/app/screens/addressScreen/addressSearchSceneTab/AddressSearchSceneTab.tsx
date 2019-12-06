import React from 'react';

import { StyleSheet, View, ScrollView } from 'react-native';

import CepContent from '../../../components/cepContent/CepContent';
import Title from '../../../components/title/Title';
import Loading from '../../../components/loading/Loading';
import Alert from '../../../components/alert/Alert';
import AddressContent from '../../../components/addressContent/AddressContent';
import Info from '../../../components/info/Info';

import { AddressSearchSceneTabContainer } from './AddressSearchSceneTabContainer';
import { IAddressSearchSceneTabProps } from './IAddressSearchSceneTabProps';
import { Status } from '../../../../models/Status';

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        paddingHorizontal: 14,
    }
});

const AddressSearchSceneTab: React.FC<IAddressSearchSceneTabProps> = ({
    addressState: {
        status,
        historyList,
        searchResultList,
    },
    addressDelete,
}) => (
    <>
        {searchResultList.length === 0 && status === Status.Nothing ? (
            <Info>
                Para pesquisar endereços, clique no botão de pesquisa, logo a baixo, e insira o endereço desejado.
            </Info>

        ) : (
            <ScrollView style={styles.scrollView}>
                <View style={{ height: 16 }} />
                
                {status === Status.Loading ? (
                    <Loading />

                ) : status === Status.NotFound ? (
                    <Alert type="warning">
                        A pesquisa atual não retornou resultados
                    </Alert>

                ) : status === Status.Error ? (
                    <Alert type="error">
                        Erro ao realizar a pesquisa
                    </Alert>

                ) : (
                    <>
                        <AddressContent
                            title="Pesquisa atual"
                            address={historyList[0]}
                            addressDelete={addressDelete}
                        />

                        <Title
                            title="Resultado da pesquisa"
                            desc={`A pesquisa atual retornou ${searchResultList.length} endereços`}
                        />

                        {searchResultList.map((cep, index) => (
                            <CepContent cep={cep} key={index} hideDate />
                        ))}
                    </>
                )}
            </ScrollView>
        )}
    </>
);

export default AddressSearchSceneTabContainer(AddressSearchSceneTab);

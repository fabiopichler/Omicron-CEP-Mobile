import React from 'react';

import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';

import AppHeader from '@/app/components/appHeader/AppHeader';
import CepForm from './cepForm/CepForm';
import CepContent from '../../components/cepContent/CepContent';
import Title from '../../components/title/Title';
import Alert from '../../components/alert/Alert';
import Loading from '../../components/loading/Loading';
import Info from '../../components/info/Info';

import { CepScreenContainer } from './CepScreenContainer';
import { ICepScreenProps } from './ICepScreenProps';
import { Status } from '../../../models/Status';

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
        paddingHorizontal: 14,
    },
});

const CepScreen: React.FC<ICepScreenProps> = ({
    cepState: {
        historyList,
        status,
    },
    cepDelete,
}) => {

    const { colors } = useTheme();

    const [currentSearch, setCurrentSearch] = React.useState('');

    return (
        <View style={[styles.root, { backgroundColor: colors.background }]}>
            <AppHeader
                title="Pesquisa por CEP"
            />

            <CepForm setCurrentSearch={setCurrentSearch} />

            {historyList.length === 0 && status === Status.Nothing ? (
                <Info>
                    Você ainda não realizou pesquisas de endereço por CEP. Para começar, insira o número do CEP na caixa de pesquisa.
                </Info>

            ) : (
                <ScrollView style={styles.scrollView}>
                    <View style={{ height: 16 }} />

                    {status === Status.Loading ? (
                        <Loading />

                    ) : status === Status.NotFound ? (
                        <Alert type="warning">
                            A pesquisa por {currentSearch} não retornou resultados
                        </Alert>

                    ) : status === Status.Error ? (
                        <Alert type="error">
                            Erro ao realizar a pesquisa
                        </Alert>

                    ) : status === Status.Ok && historyList.length > 0 ? (
                        <CepContent cep={historyList[0]} onCepDelete={cepDelete} />

                    ) : null}

                    {historyList.length > 1 || (status !== Status.Ok && historyList.length === 1) ? (
                        <>
                            <Title
                                title="Histórico de pesquisas"
                                desc="Lista das últimas pesquisas realizadas"
                            />

                            {historyList.map((cep, index) => (
                                index > 0 || status !== Status.Ok ? (
                                    <CepContent
                                        cep={cep}
                                        key={index}
                                        onCepDelete={cepDelete}
                                    />
                                ) : null
                            ))}
                        </>
                    ) : null}
                </ScrollView>
            )}
        </View>
    );
};

export default CepScreenContainer(CepScreen);

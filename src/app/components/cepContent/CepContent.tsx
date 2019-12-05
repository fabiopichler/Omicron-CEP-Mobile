import React from 'react';
import Moment from 'react-moment';

import { StyleSheet } from 'react-native';
import { Card, Text, Headline, IconButton, Colors, useTheme } from 'react-native-paper';

import QuestionDialog from '../questionDialog/QuestionDialog';

import { ICepContentProps } from './ICepContentProps';

const styles = StyleSheet.create({
    root: {
        position: 'relative',
        marginHorizontal: 2,
        marginBottom: 16,
        borderRadius: 0,
        elevation: 1,
    },
    cardItem: {
        marginTop: 12,
        marginBottom: 2,
    },
    marginTop1: {
        marginTop: 8,
    },
    body1: {
        fontWeight: 'bold',
        color: '#777',
        lineHeight: 26,
        fontSize: 16,
    },
    date: {
        color: '#777',
        fontSize: 14,
    },
    closeButton: {
        position: 'absolute',
        right: 4,
        top: 8,
        zIndex: 1,
    },
});

const CepContent: React.FC<ICepContentProps> = props => {
    const { cep, hideDate, onCepDelete } = props;

    const { colors } = useTheme();
    const textPrimary = { color: colors.accent };

    return (
        <Card style={styles.root}>
            {onCepDelete ? (
                <QuestionDialog
                    title="Remover CEP"
                    description={
                        <Text>
                            Deseja remover o CEP <Text style={{ fontWeight: 'bold' }}>{cep.cep}</Text> do histórico de pesquisas?
                        </Text>
                    }
                    onConfirm={() => onCepDelete(cep.cep)}
                    openButton={(props: any) => (
                        <IconButton
                            icon="close"
                            color={Colors.grey500}
                            style={styles.closeButton}
                            size={26}
                            {...props}
                        />
                    )}
                />
            ) : null}

            <Card.Content style={styles.cardItem}>
                <Headline style={textPrimary}>
                    CEP: {cep.cep}
                </Headline>

                {!hideDate ? (
                    <Text style={styles.date}>
                        Pesquisado

                        {' '}

                        <Moment
                            fromNow
                            withTitle
                            titleFormat="LLL"
                            date={cep.date}
                            element={Text}
                            style={styles.date}
                        />
                    </Text>
                ) : null}

                <Text
                    style={[styles.body1, styles.marginTop1]}
                >
                    Logradouro:

                    {' '}

                    <Text style={[styles.body1, textPrimary]}>
                        {cep.logradouro} {cep.complemento ? `- ${cep.complemento}` : ''}
                    </Text>
                </Text>

                <Text
                    style={styles.body1}
                >
                    Bairro:

                    {' '}

                    <Text style={[styles.body1, textPrimary]}>
                        {cep.bairro}
                    </Text>
                </Text>

                <Text
                    style={styles.body1}
                >
                    Cidade/Estado:

                    {' '}

                    <Text style={[styles.body1, textPrimary]}>
                        {cep.localidade}/{cep.uf}
                    </Text>
                </Text>
            </Card.Content>
        </Card>
    );
};

export default CepContent;

import React from 'react';
import Moment from 'react-moment';

import { StyleSheet } from 'react-native';
import { Card, Text, Headline, IconButton, Colors } from 'react-native-paper';

import QuestionDialog from '../questionDialog/QuestionDialog';

import { ICepContentProps } from './ICepContentProps';
import { useTheme } from '@/themes/theme';

const styles = StyleSheet.create({
    root: {
        position: 'relative',
        marginHorizontal: 2,
        marginBottom: 16,
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
        lineHeight: 26,
        fontSize: 16,
    },
    date: {
        fontSize: 14,
    },
    closeButton: {
        position: 'absolute',
        right: 4,
        top: 6,
        zIndex: 1,
    },
});

const CepContent: React.FC<ICepContentProps> = ({
    cep,
    hideDate,
    onCepDelete,
}) => {

    const {
        customColors,
        customStyles,
    } = useTheme();

    const textPrimary = {
        color: customColors.textPrimary,
    };

    const textSecondary = {
        color: customColors.textSecondary,
    };

    return (
        <Card style={[styles.root, customStyles.card]}>
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
                    <Text style={[styles.date, textSecondary]}>
                        Pesquisado

                        {' '}

                        <Moment
                            fromNow
                            withTitle
                            titleFormat="LLL"
                            date={cep.date}
                            element={Text}
                            style={[styles.date, textSecondary] as any}
                        />
                    </Text>
                ) : null}

                <Text
                    style={[styles.body1, styles.marginTop1, textSecondary]}
                >
                    Logradouro:

                    {' '}

                    <Text style={[styles.body1, textPrimary]}>
                        {cep.logradouro} {cep.complemento ? `- ${cep.complemento}` : ''}
                    </Text>
                </Text>

                <Text
                    style={[styles.body1, textSecondary]}
                >
                    Bairro:

                    {' '}

                    <Text style={[styles.body1, textPrimary]}>
                        {cep.bairro}
                    </Text>
                </Text>

                <Text
                    style={[styles.body1, textSecondary]}
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

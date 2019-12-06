import React from 'react';
import Moment from 'react-moment';

import { StyleSheet } from 'react-native';
import { Card, Text, IconButton, Colors, Headline, useTheme } from 'react-native-paper';

import QuestionDialog from '../questionDialog/QuestionDialog';

import { IAddressContentProps } from './IAddressContentProps';
import { UfList } from '@/data/UfList';

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
    headline: {
        color: '#777',
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

const AddressContent: React.FC<IAddressContentProps> = ({
    title,
    address,
    addressDelete,
}) => {

    const { colors } = useTheme();
    const textPrimary = { color: colors.accent };

    return (
        <Card style={styles.root}>
            {addressDelete ? (
                <QuestionDialog
                    title="Remover endereço"
                    description={
                        <Text>
                            Deseja remover o endereço

                            {' '}

                            <Text style={{ fontWeight: 'bold' }}>
                                {address.logradouro}, {address.cidade}/{address.uf}
                            </Text>

                            {' '}

                            do histórico de pesquisas?
                        </Text>
                    }
                    onConfirm={() => addressDelete(address)}
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
                {title ? (
                    <Headline style={styles.headline}>
                        {title}
                    </Headline>
                ) : null}

                <Text style={styles.date}>
                    Pesquisado

                    {' '}

                    <Moment
                        fromNow
                        withTitle
                        titleFormat="LLL"
                        date={address.date}
                        element={Text}
                        style={styles.date}
                    />
                </Text>

                <Text
                    style={[styles.body1, styles.marginTop1]}
                >
                    Logradouro:

                    {' '}

                    <Text style={[styles.body1, textPrimary]}>
                        {address.logradouro}
                    </Text>
                </Text>

                <Text
                    style={styles.body1}
                >
                    Cidade:

                    {' '}

                    <Text style={[styles.body1, textPrimary]}>
                        {address.cidade}
                    </Text>
                </Text>

                <Text
                    style={styles.body1}
                >
                    Estado (UF):

                    {' '}

                    <Text style={[styles.body1, textPrimary]}>
                        {UfList[UfList.map(x => x[0]).indexOf(address.uf)][1]} ({address.uf})
                    </Text>
                </Text>
            </Card.Content>
        </Card>
    );
};

export default AddressContent;

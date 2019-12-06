import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { IAlertProps, AlertType } from './IAlertProps';

const styles = StyleSheet.create({
    root: {
        marginHorizontal: 2,
        marginBottom: 16,
        borderRadius: 0,
        elevation: 1,
    },
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    info: {
        backgroundColor: '#388e3c',
    },
    warning: {
        backgroundColor: '#ffa000',
    },
    error: {
        backgroundColor: '#e53935',
    },
    'text-info': {
        color: 'white',
    },
    'text-warning': {
    },
    'text-error': {
        color: 'white',
    },
    text: {
        fontSize: 16,
    },
    icon: {
        marginRight: 10,
        fontSize: 26,
    },
});

const Alert: React.FC<IAlertProps> = ({
    type = 'info',
    children,
}) => (
    <Card style={[styles.root, styles[type]]}>
        <Card.Content style={styles.cardItem}>
            <Icon
                name={type}
                style={[styles.icon, styles[`text-${type}` as AlertType]]}
            />

            <Text style={[styles.text, styles[`text-${type}` as AlertType]]}>
                {children}
            </Text>
        </Card.Content>
    </Card>
);

export default Alert;

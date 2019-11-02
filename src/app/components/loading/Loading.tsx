import React from 'react';

import { StyleSheet } from 'react-native';
import { Card, ActivityIndicator, Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
    root: {
        marginHorizontal: 2,
        marginBottom: 16,
        borderRadius: 0,
        elevation: 1,
    },
    cardItem: {
        flexDirection: 'column',
        paddingVertical: 22,
    },
    text: {
        marginTop: 16,
        fontSize: 16,
        textAlign: 'center',
    }
});

const Loading: React.FC = () => (
    <Card style={styles.root}>
        <Card.Content style={styles.cardItem}>
            <ActivityIndicator
                animating={true}
                size={32}
            />
            
            <Paragraph style={styles.text}>Carregando...</Paragraph>
        </Card.Content>
    </Card>
);

export default Loading;

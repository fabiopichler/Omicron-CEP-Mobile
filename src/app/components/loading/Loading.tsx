import React from 'react';

import { StyleSheet } from 'react-native';
import { Card, ActivityIndicator, Paragraph } from 'react-native-paper';

import { useTheme } from '@/themes/theme';

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

const Loading: React.FC = () => {
    const { customColors } = useTheme();

    return (
        <Card style={styles.root}>
            <Card.Content style={styles.cardItem}>
                <ActivityIndicator
                    animating={true}
                    size={32}
                    color={customColors.textPrimary}
                />

                <Paragraph style={styles.text}>
                    Carregando...
                </Paragraph>
            </Card.Content>
        </Card>
    );
};

export default Loading;

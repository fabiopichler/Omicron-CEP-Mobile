import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        maxWidth: 500,
        paddingHorizontal: 24,
        lineHeight: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#777',
        fontSize: 16,
    }
});

const Info: React.FC = props => {
    const { children } = props;
    
    return (
        <View style={styles.root}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
};

export default Info;

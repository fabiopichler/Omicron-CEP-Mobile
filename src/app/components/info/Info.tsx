import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { useTheme } from '@/themes/theme';

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
        fontSize: 16,
    }
});

const Info: React.FC<{ children?: React.ReactNode }> = ({
    children,
}) => {

    const { customColors } = useTheme();

    const textSecondary = {
        color: customColors.textSecondary,
    };

    return (
        <View style={styles.root}>
            <Text style={[styles.text, textSecondary]}>
                {children}
            </Text>
        </View>
    );
}

export default Info;

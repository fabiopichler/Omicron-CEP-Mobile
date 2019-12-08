import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Title as TitlePaper, Text } from 'react-native-paper';

import { ITitleProps } from './ITitleProps';
import { useTheme } from '@/themes/theme';

const styles = StyleSheet.create({
    root: {
        marginBottom: 22,
        paddingHorizontal: 18,
    },
    text: {
        fontSize: 16,
    },
});

const Title: React.FC<ITitleProps> = ({
    title,
    desc,
}) => {
    const {
        title: titleColor,
        textSecondary,
    } = useTheme().customColors;

    return (
        <View style={styles.root}>
            <TitlePaper
                style={{ color: titleColor }}
            >
                {title}
            </TitlePaper>

            <Text
                style={[styles.text, {
                    color: textSecondary
                }]}
            >
                {desc}
            </Text>
        </View>
    );
}

export default Title;

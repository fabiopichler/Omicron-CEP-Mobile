import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Title as TitlePaper, Text } from 'react-native-paper';

import { ITitleProps } from './ITitleProps';

const styles = StyleSheet.create({
    root: {
        marginBottom: 22,
        paddingHorizontal: 18,
    },
    text: {
        fontSize: 16,
    },
    color: {
        color: '#666',
    }
});

const Title: React.FC<ITitleProps> = props => {
    const { title, desc } = props;
    
    return (
        <View style={styles.root}>
            <TitlePaper
                style={styles.color}
            >
                {title}
            </TitlePaper>

            <Text
                style={[ styles.text, styles.color ]}
            >
                {desc}
            </Text>
        </View>
    );
};

export default Title;

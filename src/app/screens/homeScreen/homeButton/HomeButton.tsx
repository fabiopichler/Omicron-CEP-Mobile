import React from 'react';

import { StyleSheet, View } from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';

import { IHomeButtonProps } from './IHomeButtonProps';
import { useTheme } from '@/themes/theme';

const styles = StyleSheet.create({
    button: {
        width: 240,
        height: 60,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textTop: {
        marginBottom: 2,
        lineHeight: 15,
        fontSize: 13,
        color: 'rgba(240,240,240,.7)',
    },
    text: {
        color: 'white',
        letterSpacing: 1,
        fontWeight: 'bold',
        marginLeft: 4,
        fontSize: 15,
        lineHeight: 18,
        textTransform: 'uppercase',
    },
});

const HomeButton: React.FC<IHomeButtonProps> = ({
    icon: Icon,
    iconName,
    iconSize,
    onPress,
    children,
}) => {
    const { colors } = useTheme();

    return (
        <TouchableRipple
            rippleColor="rgba(255,255,255,.35)"
            style={[styles.button, { backgroundColor: colors.accent }]}
            onPress={onPress}
        >
            <>
                <Text style={styles.textTop}>
                    Pesquisa por
                </Text>

                <View style={styles.textView}>
                    <Icon
                        name={iconName}
                        size={iconSize}
                        color={styles.textTop.color}
                    />

                    <Text style={styles.text}>
                        {children}
                    </Text>
                </View>
            </>
        </TouchableRipple>
    );
};

export default HomeButton;

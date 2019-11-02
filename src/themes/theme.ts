import { DefaultTheme, Colors, Theme } from "react-native-paper";

export const theme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.teal600,
        accent: Colors.teal500,
        background: '#e9eaeb',
        text: '#444',
    },
};

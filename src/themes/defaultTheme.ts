import { DefaultTheme } from "react-native-paper";

import { ITheme } from "./theme";

export const defaultTheme: ITheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#00795c',
        accent: '#008868',
        background: '#e9eaeb',
        text: '#444',
    },
    customColors: {
        primaryDark: '#007254',
        backgroundSecondary: '#ddd',
        title: '#666',
        textPrimary: '#00795c',
        textSecondary: '#666',
        button: '#00795c',
    },
    customStyles: {
        card: {
            borderRadius: 0,
            elevation: 1,
        }
    }
};

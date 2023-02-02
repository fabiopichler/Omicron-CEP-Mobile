import { MD2LightTheme } from "react-native-paper";

import { ITheme } from "./theme";

export const defaultTheme: ITheme = {
    ...MD2LightTheme,
    colors: {
        ...MD2LightTheme.colors,
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

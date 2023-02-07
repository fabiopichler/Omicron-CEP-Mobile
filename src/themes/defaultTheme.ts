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
            borderRadius: 6,
            elevation: 1,
        },
        cepForm: {
            primary: 'rgb(60,70,90)',
            text: 'white',
            textFocus: 'black',
            placeholder: 'rgba(255,255,255,.8)',
            background: '#139575',
            backgroundFocus: 'white',
            roundness: 6,
        },
    }
};

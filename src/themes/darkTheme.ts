import { MD2DarkTheme } from "react-native-paper";

import { ITheme } from "./theme";

export const darkTheme: ITheme = {
    ...MD2DarkTheme,
    mode: 'exact',
    colors: {
        ...MD2DarkTheme.colors,
        primary: '#263859',
        accent: '#2d456a',
        background: '#242424',
        surface: '#333333',
        text: 'white',
    },
    customColors: {
        primaryDark: '#203253',
        backgroundSecondary: '#2d2d2d',
        title: '#77abc7',
        textPrimary: 'rgba(255,255,255,.8)',
        textSecondary: 'rgba(255,255,255,.8)',
        button: '#44aacc',
    },
    customStyles: {
        card: {
            borderRadius: 8,
            elevation: 0,
        },
        cepForm: {
            primary: 'rgba(255,255,255,.6)',
            text: 'white',
            textFocus: 'white',
            placeholder: 'rgba(255,255,255,.8)',
            background: '#263859',
            backgroundFocus: '#2d2d2d',
            roundness: 8,
        },
    }
};

import { DarkTheme } from "react-native-paper";

import { ITheme } from "./theme";

export const darkTheme: ITheme = {
    ...DarkTheme,
    mode: 'exact',
    colors: {
        ...DarkTheme.colors,
        primary: '#003020',
        accent: '#003927',
        surface: '#2a2a2a',
        text: 'white',
        background: '#1e1e1e'
    },
    customColors: {
        primaryDark: '#002a1a',
        backgroundSecondary: '#262626',
        title: '#2a7',
        textPrimary: 'rgba(255,255,255,.8)',
        textSecondary: 'rgba(255,255,255,.8)',
    },
    customStyles: {
        card: {
            borderRadius: 8,
            elevation: 0,
        }
    }
};

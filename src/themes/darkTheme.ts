import { DarkTheme } from "react-native-paper";

import { ITheme } from "./theme";

export const darkTheme: ITheme = {
    ...DarkTheme,
    mode: 'exact',
    colors: {
        ...DarkTheme.colors,
        primary: '#044343',
        accent: '#0f4e4e',
        background: '#232931',
        surface: '#393e46',
        text: 'white',
    },
    customColors: {
        primaryDark: '#003a37',
        backgroundSecondary: '#232931',
        title: '#4ecca3',
        textPrimary: '#4ecca3',
        textSecondary: 'rgba(255,255,255,.8)',
    },
    customStyles: {
        card: {
            borderRadius: 6,
            elevation: 0,
        }
    }
};

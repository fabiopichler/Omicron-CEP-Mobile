import { DarkTheme } from "react-native-paper";

import { ITheme } from "./theme";

export const darkTheme: ITheme = {
    ...DarkTheme,
    mode: 'exact',
    colors: {
        ...DarkTheme.colors,
        primary: '#263859',
        accent: '#324869',
        background: '#242424',
        surface: '#333333',
        text: 'white',
    },
    customColors: {
        primaryDark: '#203253',
        backgroundSecondary: '#2d2d2d',
        title: '#77abb7',
        textPrimary: 'rgba(255,255,255,.8)',
        textSecondary: 'rgba(255,255,255,.8)',
        button: '#77abb7',
    },
    customStyles: {
        card: {
            borderRadius: 0,
            elevation: 0,
        }
    }
};

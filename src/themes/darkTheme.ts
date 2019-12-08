import { DarkTheme } from "react-native-paper";

import { ITheme } from "./theme";

export const darkTheme: ITheme = {
    ...DarkTheme,
    mode: 'exact',
    colors: {
        ...DarkTheme.colors,
        primary: '#2c2c2c',
        accent: '#3a3a3a',
        surface: '#252525',
        text: 'white',
    },
    customColors: {
        primaryDark: '#00402f',
        backgroundSecondary: '#262626',
        title: '#5b8',
        textPrimary: '#5b8',
        textSecondary: 'rgba(255,255,255,.8)',
    },
    customStyles: {
        card: {
            borderRadius: 12,
            elevation: 0,
        }
    }
};

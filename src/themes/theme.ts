import {
    DefaultTheme,
    DarkTheme,
    Theme,
    useTheme as useThemePaper
} from "react-native-paper";

export interface IThemeCustomColors {
    primaryDark: string;
    backgroundSecondary: string;
    title: string;
    textPrimary: string;
    textSecondary: string;
}

export interface ITheme extends Theme {
    customColors: IThemeCustomColors;
}

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
    }
};

export const darkTheme: ITheme = {
    ...DarkTheme,
    mode: 'exact',
    colors: {
        ...DarkTheme.colors,
        primary: '#2c2c2c',
        accent: '#3a3a3a',
        surface: '#262626',
        text: 'white',
    },
    customColors: {
        primaryDark: '#00402f',
        backgroundSecondary: '#262626',
        title: '#5b8',
        textPrimary: '#5b8',
        textSecondary: 'rgba(255,255,255,.8)',
    }
};

export const useTheme = () => <ITheme>useThemePaper();

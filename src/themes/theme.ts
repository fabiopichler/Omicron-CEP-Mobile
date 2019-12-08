import {
    DefaultTheme,
    DarkTheme,
    Theme,
    useTheme as useThemePaper
} from "react-native-paper";

export interface IThemeCustomColors {
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
        primary: '#004640',
        accent: '#005049',
        surface: '#303030',
        text: 'white',
    },
    customColors: {
        title: '#5b8',
        textPrimary: '#5b8',
        textSecondary: 'rgba(255,255,255,.8)',
    }
};

export const useTheme = () => <ITheme>useThemePaper();

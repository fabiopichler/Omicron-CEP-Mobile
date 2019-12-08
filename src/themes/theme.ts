import { StyleProp, ViewStyle } from "react-native";
import {
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

export interface IThemeCustomStyles {
    card: StyleProp<ViewStyle>;
}

export interface ITheme extends Theme {
    customColors: IThemeCustomColors;
    customStyles: IThemeCustomStyles;
}

export const useTheme = () => <ITheme>useThemePaper();

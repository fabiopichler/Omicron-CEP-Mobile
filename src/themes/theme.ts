import { StyleProp, ViewStyle } from "react-native";
import {
    MD2Theme,
    useTheme as useThemePaper
} from "react-native-paper";

export interface IThemeCustomColors {
    primaryDark: string;
    backgroundSecondary: string;
    title: string;
    textPrimary: string;
    textSecondary: string;
    button: string;
}

export interface ICepFormStyle {
    primary: string;
    text: string;
    textFocus: string;
    placeholder: string;
    background: string;
    backgroundFocus: string;
    roundness: number;
}

export interface IThemeCustomStyles {
    card: StyleProp<ViewStyle>;
    cepForm: ICepFormStyle;
}

export interface ITheme extends MD2Theme {
    customColors: IThemeCustomColors;
    customStyles: IThemeCustomStyles;
}

export const useTheme = () => useThemePaper<ITheme>();

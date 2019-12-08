import { StyleProp, TextStyle } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

export interface IAppHeaderProps {
    title?: React.ReactNode;
    titleStyle?: StyleProp<TextStyle>;
    subtitle?: React.ReactNode;
    subtitleStyle?: StyleProp<TextStyle>;
    contentRight?: React.ReactNode;
    noLeft?: boolean;
    noMenu?: boolean;
    noShadow?: boolean;
    onDrawerOpen?: () => void;
    navigation: NavigationStackProp;
};

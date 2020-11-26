import { StyleProp, TextStyle } from "react-native";

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
};

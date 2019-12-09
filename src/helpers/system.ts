import { Platform, StatusBar } from "react-native";

export const statusBarCurrentHeight = (
    typeof Platform.Version === 'number'
        && Platform.Version >= 21
        && StatusBar.currentHeight
        ? StatusBar.currentHeight
        : 0
);

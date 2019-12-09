import { Platform, StatusBar } from "react-native";

export const statusBarCurrentHeight = Platform.Version >= 21 ? StatusBar.currentHeight : 0;

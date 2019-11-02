import { NavigationRoute } from "react-navigation";
import { NavigationStackProp } from "react-navigation-stack";

export interface IMenuListProps {
    onItemPress: () => void;
    navigation: NavigationStackProp<NavigationRoute>;
}

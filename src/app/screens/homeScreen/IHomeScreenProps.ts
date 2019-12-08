import { NavigationStackScreenProps } from "react-navigation-stack";

import { ISystemState } from "@/store/system/ISystemState";

export interface IHomeScreenProps extends NavigationStackScreenProps {
    systemState: ISystemState;
    changeDarkMode: () => void;
}

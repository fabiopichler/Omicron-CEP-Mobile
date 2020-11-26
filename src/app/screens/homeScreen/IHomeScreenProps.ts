
import { ISystemState } from "@/store/system/ISystemState";

export interface IHomeScreenProps {
    systemState: ISystemState;
    changeDarkMode: () => void;
}

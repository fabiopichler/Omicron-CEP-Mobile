import { ISystemState } from "@/store/system/ISystemState";

export interface IAppProps {
    systemState: ISystemState;
    systemInit: () => void;
    cepInit: () => void;
    addressInitHistory: () => void;
}

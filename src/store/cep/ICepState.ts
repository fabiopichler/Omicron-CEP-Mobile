import { IViaCEP } from "../../models/IViaCEP";
import { Status } from "../../models/Status";

export interface ICepState {
    currentCep: string;
    historyList: IViaCEP[];
    status: Status;
}

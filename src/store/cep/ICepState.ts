import { IViaCEP } from "../../models/IViaCEP";
import { Status } from "../../models/Status";

export interface ICepState {
    historyList: IViaCEP[];
    status: Status;
}

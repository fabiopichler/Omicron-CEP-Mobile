import { IAddress } from "../../models/IAddress";
import { Status } from "../../models/Status";
import { IViaCEP } from "../../models/IViaCEP";

export interface IAddressState {
    historyList: IAddress[];
    searchResultList: IViaCEP[];
    status: Status;
}

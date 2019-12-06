import { IAddress } from "../../models/IAddress";
import { Status } from "../../models/Status";
import { IViaCEP } from "../../models/IViaCEP";

export interface IAddressState {
    currentAddress: IAddress | null;
    historyList: IAddress[];
    searchResultList: IViaCEP[];
    status: Status;
}

import { IAddressState } from "../../../../store/address/IAddressState";
import { IAddress } from "../../../../models/IAddress";

export interface IAddressHistorySceneTabProps {
    addressState: IAddressState;
    addressDelete: (address: IAddress) => void;
}

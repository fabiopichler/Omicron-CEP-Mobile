import { IAddress } from "../../../models/IAddress";
import { IAddressState } from "@/store/address/IAddressState";

export interface IAddressScreenProps {
    addressState: IAddressState;
    onCheckByAddress: (address: IAddress) => void;
}

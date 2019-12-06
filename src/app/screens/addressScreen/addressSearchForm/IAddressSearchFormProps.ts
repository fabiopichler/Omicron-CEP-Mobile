import { IAddress } from "../../../../models/IAddress";
import { IAddressState } from "@/store/address/IAddressState";

export interface IAddressSearchFormProps {
    index: number;
    addressState: IAddressState;
    onCheckByAddress: (address: IAddress) => void;
}

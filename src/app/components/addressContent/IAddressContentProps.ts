import { IAddress } from "../../../models/IAddress";

export interface IAddressContentProps {
    title?: string;
    address: IAddress;
    addressDelete?: (address: IAddress) => void;
}

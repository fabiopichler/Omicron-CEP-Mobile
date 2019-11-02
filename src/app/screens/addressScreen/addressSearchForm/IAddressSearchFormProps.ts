import { IAddress } from "../../../../models/IAddress";

export interface IAddressSearchFormProps {
    index: number;
    onCheckByAddress: (address: IAddress) => void;
}

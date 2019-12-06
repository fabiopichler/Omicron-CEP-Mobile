import { NavigationStackScreenProps } from "react-navigation-stack";

import { IAddress } from "../../../models/IAddress";
import { IAddressState } from "@/store/address/IAddressState";

export interface IAddressScreenProps extends NavigationStackScreenProps {
    addressState: IAddressState;
    onCheckByAddress: (address: IAddress) => void;
}

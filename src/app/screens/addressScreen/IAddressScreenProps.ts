import { NavigationStackScreenProps } from "react-navigation-stack";

import { IAddress } from "../../../models/IAddress";

export interface IAddressScreenProps extends NavigationStackScreenProps {
    onCheckByAddress: (address: IAddress) => void;
}

import { NavigationStackScreenProps } from "react-navigation-stack";

import { ICepState } from "../../../store/cep/ICepState";

export interface ICepScreenProps extends NavigationStackScreenProps {
    cepState: ICepState;
    cepDelete: (cep: string) => void;
}

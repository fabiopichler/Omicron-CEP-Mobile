import { ICepState } from "../../../store/cep/ICepState";

export interface ICepScreenProps {
    cepState: ICepState;
    cepDelete: (cep: string) => void;
}

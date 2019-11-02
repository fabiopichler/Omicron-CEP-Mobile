import { ICepState } from "../../../../store/cep/ICepState";

export interface ICepFormProps {
    cepState: ICepState;
    checkCep: (cep: string) => void;
    setCurrentSearch: (cep: string) => void;
}

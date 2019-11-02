import { IViaCEP } from '../../../models/IViaCEP';

export interface ICepContentProps {
    cep: IViaCEP;
    hideDate?: boolean;
    onCepDelete?: (cep: string) => void;
}

import { ICepState } from './cep/ICepState';
import { IAddressState } from './address/IAddressState';

export interface IRootState {
    cepState: ICepState;
    addressState: IAddressState;
}

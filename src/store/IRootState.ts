import { ISystemState } from './system/ISystemState';
import { ICepState } from './cep/ICepState';
import { IAddressState } from './address/IAddressState';

export interface IRootState {
    systemState: ISystemState;
    cepState: ICepState;
    addressState: IAddressState;
}

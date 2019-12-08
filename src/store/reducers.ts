import { combineReducers } from 'redux';

import { SystemReducer } from './system/SystemReducer';
import { CepReducer } from './cep/CepReducer';
import { AddressReducer } from './address/AddressReducer';

export const reducers = combineReducers({
    systemState: SystemReducer,
    cepState: CepReducer,
    addressState: AddressReducer,
});

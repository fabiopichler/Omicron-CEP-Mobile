import { combineReducers } from 'redux';

import { CepReducer } from './cep/CepReducer';
import { AddressReducer } from './address/AddressReducer';

export const reducers = combineReducers({
    cepState: CepReducer,
    addressState: AddressReducer,
});

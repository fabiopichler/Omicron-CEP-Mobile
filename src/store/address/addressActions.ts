import axios from 'axios';

import { IViaCEP } from '../../models/IViaCEP';
import { Status } from '../../models/Status';
import { AddressHistory } from '../../models/AddressHistory';
import { IAddressAction } from './IAddressAction';
import { IAddress } from '../../models/IAddress';

export const ADDRESS_INIT = 'ADDRESS_INIT';
export const ADDRESS_DONE = 'ADDRESS_DONE';
export const ADDRESS_START = 'ADDRESS_START';
export const ADDRESS_DELETE = 'ADDRESS_DELETE';
export const ADDRESS_ERROR = 'ADDRESS_ERROR';

export const addressInitHistory = () => async (dispatch: (param: IAddressAction) => void) => {
    try {
        const cepList = await AddressHistory.getList();

        if (cepList)
            dispatch({ type: ADDRESS_INIT, payload: cepList });

    } catch (error) { }
};

export const checkByAddress = (address: IAddress) => (
    async (dispatch: (param: IAddressAction) => void) => {
        dispatch({ type: ADDRESS_START, payload: null });

        const { uf, cidade, logradouro } = address;

        const url = `https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`;

        try {
            const { data } = await axios.get<IViaCEP[]>(url);

            if (data.length < 1) {
                dispatch({ type: ADDRESS_ERROR, payload: Status.NotFound });
                return;
            }

            dispatch({
                type: ADDRESS_DONE,
                payload: {
                    data,
                    history: {
                        date: new Date(),
                        ...address
                    }
                }
            });

        } catch (err) {
            dispatch({ type: ADDRESS_ERROR, payload: Status.Error });
        }
    }
);

export const addressDelete = (address: IAddress): IAddressAction => ({
    type: ADDRESS_DELETE,
    payload: address
});

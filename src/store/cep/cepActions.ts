import axios from 'axios';

import { IViaCEP } from '../../models/IViaCEP';
import { CepHistory } from '../../models/CepHistory';
import { ICepAction } from './ICepAction';
import { Status } from '../../models/Status';

export const CEP_INIT = 'CEP_INIT';
export const CEP_DONE = 'CEP_DONE';
export const CEP_START = 'CEP_START';
export const CEP_DELETE = 'CEP_DELETE';
export const CEP_ERROR = 'CEP_ERROR';

export const cepInit = () => async (dispatch: (param: ICepAction) => void) => {
    try {
        const cepList = await CepHistory.getList();

        if (cepList)
            dispatch({ type: CEP_INIT, payload: cepList });

    } catch (error) {}
};

export const checkCep = (cep: string) => (
    async (dispatch: (param: ICepAction) => void) => {
        dispatch({ type: CEP_START, payload: null });

        const url = `https://viacep.com.br/ws/${cep}/json/unicode/`;

        try {
            const { data } = await axios.get<IViaCEP>(url);

            if (data.erro) {
                dispatch({ type: CEP_ERROR, payload: Status.NotFound });
                return;
            }

            dispatch({
                type: CEP_DONE,
                payload: {
                    ...data,
                    date: new Date()
                }
            });

        } catch (err) {
            dispatch({ type: CEP_ERROR, payload: Status.Error });
        }
    }
);

export const cepDelete = (cep: string): ICepAction => ({
    type: CEP_DELETE,
    payload: cep
});

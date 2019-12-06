import {
    CEP_INIT,
    CEP_DONE,
    CEP_START,
    CEP_DELETE,
    CEP_ERROR,
} from './cepActions';

import { ICepState } from './ICepState';
import { ICepAction } from './ICepAction';
import { Status } from '../../models/Status';
import { CepHistory } from '../../models/CepHistory';
import { Config } from '@/config';

const initialState: ICepState = {
    historyList: [],
    status: Status.Nothing
};

export const CepReducer = (state: ICepState = initialState, actions: ICepAction): ICepState => {
    const { type, payload } = actions;

    switch (type) {
        case CEP_INIT:
            return { ...state, historyList: payload };

        case CEP_DONE: {
            const historySize = Config.historySize;
            const historyList = [...state.historyList];
            const index = historyList.map(x => x.cep).indexOf(payload.cep);

            if (index !== -1)
                historyList.splice(index, 1);

            historyList.unshift(payload);

            if (historyList.length > historySize)
                historyList.splice(historySize, historyList.length - historySize);

            CepHistory.setList(historyList);

            return {
                historyList,
                status: Status.Ok
            };
        }

        case CEP_START:
            return { ...state, status: Status.Loading };

        case CEP_DELETE: {
            const historyList = [...state.historyList];
            const index = historyList.map(x => x.cep).indexOf(payload);
            let status = state.status;

            if (index == 0 && status == Status.Ok)
                status = Status.Nothing;

            if (index !== -1)
                historyList.splice(index, 1);

            CepHistory.setList(historyList);

            return { ...state, historyList, status };
        }

        case CEP_ERROR:
            return { ...state, status: payload };

        default:
            return state;
    };
};

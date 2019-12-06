import {
    ADDRESS_INIT,
    ADDRESS_DONE,
    ADDRESS_START,
    ADDRESS_DELETE,
    ADDRESS_ERROR
} from "./addressActions";

import { IAddressState } from "./IAddressState";
import { IAddressAction } from "./IAddressAction";
import { IAddress } from "../../models/IAddress";
import { Status } from "../../models/Status";
import { AddressHistory } from "../../models/AddressHistory";
import { Config } from '@/config';
import { IViaCEP } from "../../models/IViaCEP";

const initialState: IAddressState = {
    historyList: [],
    searchResultList: [],
    status: Status.Nothing,
};

export const AddressReducer = (state: IAddressState = initialState, actions: IAddressAction): IAddressState => {
    const { type, payload } = actions;

    switch (type) {
        case ADDRESS_INIT:
            return { ...state, historyList: payload };

        case ADDRESS_DONE: {
            const historySize = Config.historySize;
            const historyList = [...state.historyList];
            const history: IAddress = payload.history;

            const index = historyList.findIndex(value => (
                value.logradouro === history.logradouro
                && value.cidade === history.cidade
                && value.uf === history.uf
            ));

            if (index !== -1)
                historyList.splice(index, 1);

            historyList.unshift(history);

            if (historyList.length > historySize)
                historyList.splice(historySize, historyList.length - historySize);

            AddressHistory.setList(historyList);

            return {
                historyList,
                searchResultList: payload.data,
                status: Status.Ok
            };
        }

        case ADDRESS_START:
            return { ...state, status: Status.Loading };

        case ADDRESS_DELETE: {
            let searchResultList: IViaCEP[];
            const historyList = [...state.historyList];
            const history: IAddress = payload;
            let status = state.status;

            const index = historyList.findIndex(value => (
                value.logradouro === history.logradouro
                && value.cidade === history.cidade
                && value.uf === history.uf
            ));

            if (index == 0 && status == Status.Ok) {
                status = Status.Nothing;
                searchResultList = [];
            } else {
                searchResultList = [...state.searchResultList];
            }

            if (index !== -1)
                historyList.splice(index, 1);

            AddressHistory.setList(historyList);

            return { ...state, historyList, searchResultList, status };
        }

        case ADDRESS_ERROR:
            return { ...state, searchResultList: [], status: payload };

        default:
            return state;
    };
};

import {
    SYSTEM_INIT,
    SYSTEM_DARK_MODE,
} from './systemActions';

import { ISystemState } from './ISystemState';
import { ISystemAction } from './ISystemAction';

const initialState: ISystemState = {
    darkModeEnabled: null,
};

export const SystemReducer = (state: ISystemState = initialState, actions: ISystemAction): ISystemState => {
    const { type, payload } = actions;

    switch (type) {
        case SYSTEM_INIT:
            return {
                ...state,
                darkModeEnabled: payload,
            };

        case SYSTEM_DARK_MODE:
            return { ...state, darkModeEnabled: !state.darkModeEnabled };

        default:
            return state;
    };
};

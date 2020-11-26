import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    SYSTEM_DARK_MODE_INIT,
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
        case SYSTEM_DARK_MODE_INIT:
            return {
                ...state,
                darkModeEnabled: payload === 'enabled',
            };

        case SYSTEM_DARK_MODE: {
            const darkModeEnabled = !state.darkModeEnabled;

            (async () => {
                try {
                    await AsyncStorage.setItem(
                        'SystemDarkMode',
                        darkModeEnabled ? 'enabled' : 'disabled'
                    );
                } catch (error) { }
            })();

            return {
                ...state,
                darkModeEnabled,
            };
        }

        default:
            return state;
    };
};

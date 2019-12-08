import AsyncStorage from '@react-native-community/async-storage';

import { ISystemAction } from './ISystemAction';

export const SYSTEM_INIT = 'SYSTEM_INIT';
export const SYSTEM_DARK_MODE = 'SYSTEM_DARK_MODE';

export const systemInit = () => async (dispatch: (param: ISystemAction) => void) => {
    try {
        const darkMode = await AsyncStorage.getItem('SystemDarkMode');

        if (darkMode)
            dispatch({ type: SYSTEM_INIT, payload: darkMode });

    } catch (error) { }
};

export const systemChangeDarkMode = (): ISystemAction => ({
    type: SYSTEM_DARK_MODE,
    payload: null
});

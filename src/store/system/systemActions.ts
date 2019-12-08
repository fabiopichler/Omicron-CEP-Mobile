import AsyncStorage from '@react-native-community/async-storage';

import { ISystemAction } from './ISystemAction';

export const SYSTEM_DARK_MODE_INIT = 'SYSTEM_DARK_MODE_INIT';
export const SYSTEM_DARK_MODE = 'SYSTEM_DARK_MODE';

export const systemInit = (): ISystemAction[] => [
    initDarkMode(),
];

export const systemChangeDarkMode = (): ISystemAction => ({
    type: SYSTEM_DARK_MODE,
    payload: null
});

const initDarkMode = (): ISystemAction => ({
    type: SYSTEM_DARK_MODE_INIT,
    payload: AsyncStorage.getItem('SystemDarkMode')
});

import packageJson from '../package.json';

export interface IConfig {
    readonly appVersion: string;
    readonly historySize: number;
}

export const Config: IConfig = {
    appVersion: packageJson.version,
    historySize: 20,
}

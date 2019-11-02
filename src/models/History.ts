import AsyncStorage from '@react-native-community/async-storage';

export class History<T> {

    public constructor(private readonly key: string) {}

    public async setList(list: T[]): Promise<void> {
        try {
            await AsyncStorage.setItem(this.key, JSON.stringify(list));
        } catch (error) {}
    }

    public getList(): Promise<T[]> {
        return new Promise<T[]>(async (resolve, reject) => {
            try {
                const list = await AsyncStorage.getItem(this.key);
    
                if (list) {
                    resolve(JSON.parse(list));
                    return;
                }
    
            } catch (error) {}

            reject();
        });
    }
}

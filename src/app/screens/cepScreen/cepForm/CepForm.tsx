import React from 'react';

import { StyleSheet, View } from 'react-native';
import { TextInput, IconButton, Colors } from 'react-native-paper';

import { CepFormContainer } from './CepFormContainer';
import { ICepFormProps } from './ICepFormProps';
import { Status } from '../../../../models/Status';

const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.teal600,
        paddingHorizontal: 16,
        elevation: 4,
    },
    content: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    textInput: {
        flexGrow: 1,
        backgroundColor: Colors.teal500,
    },
    iconButton: {
        position: 'absolute',
        right: 6,
    }
});

const CepForm: React.FC<ICepFormProps> = props => {
    const { cepState: { status }, checkCep, setCurrentSearch } = props;

    const [cep, setCep] = React.useState('');
    const [focus, setFocus] = React.useState(false);

    const handleSubmit = (): void => {
        if (cep.length !== 9 || status === Status.Loading)
            return;
            
        setCurrentSearch(cep);
        checkCep(cep);
    };

    const handleTextChange = (text: string): void => {
        const value = text.replace(/[^\d]/g, '');

        if (value.length > 8)
            return;

        setCep(value.replace(/(\d{5})(\d)/, '$1-$2'));
    };

    return (
        <View style={styles.root}>
            <View style={styles.content}>
                <TextInput
                    label="Insira um CEP para pesquisar"
                    returnKeyType="search"
                    theme={{
                        roundness: 0,
                        colors: {
                            primary: 'rgba(0,0,0,.6)',
                            text: focus ? 'black' : 'white',
                            placeholder: 'rgba(255,255,255,.9)',
                        }
                    }}
                    underlineColor="rgba(255,255,255,.9)"
                    maxLength={9}
                    style={styles.textInput}
                    value={cep}
                    onChangeText={handleTextChange}
                    onSubmitEditing={handleSubmit}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                
                <IconButton
                    icon="search-web"
                    color={focus ? 'black' : 'white'}
                    style={styles.iconButton}
                    size={28}
                    onPress={handleSubmit}
                    disabled={cep.length !== 9 || status === Status.Loading}
                />
            </View>
        </View>
    );
};

export default CepFormContainer(CepForm);

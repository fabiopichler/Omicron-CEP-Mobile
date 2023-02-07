import React from 'react';

import { StyleSheet, View } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';

import { CepFormContainer } from './CepFormContainer';
import { ICepFormProps } from './ICepFormProps';
import { Status } from '../../../../models/Status';
import { useTheme } from '@/themes/theme';

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 16,
        //elevation: 4,
    },
    content: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    textInput: {
        flexGrow: 1,
    },
    iconButton: {
        position: 'absolute',
        right: 6,
    }
});

const CepForm: React.FC<ICepFormProps> = ({
    cepState: {
        status,
        currentCep,
    },
    checkCep,
    setCurrentSearch,
}) => {

    const { dark, colors, customStyles } = useTheme();
    const cepFormStyle = customStyles.cepForm;

    const [cep, setCep] = React.useState('');
    const [focus, setFocus] = React.useState(false);

    React.useEffect(() => {
        setCep(currentCep);
        setCurrentSearch(currentCep);
    }, []);

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
        <View style={[styles.root, { backgroundColor: colors.primary }]}>
            <View style={[styles.content, focus ? { elevation: 4, backgroundColor: colors.primary } : {}]}>
                <TextInput
                    label="Insira um CEP para pesquisar"
                    keyboardType="numeric"
                    returnKeyType="search"
                    theme={{
                        dark,
                        roundness: 0,
                        colors: {
                            primary: cepFormStyle.primary,
                            text: focus ? cepFormStyle.textFocus : cepFormStyle.text,
                            placeholder: cepFormStyle.placeholder,
                            background: focus ? cepFormStyle.background : colors.accent
                        }
                    }}
                    underlineColor="transparent"
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
                    iconColor={focus ? cepFormStyle.textFocus : cepFormStyle.text}
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

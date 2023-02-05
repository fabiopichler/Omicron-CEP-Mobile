import React from 'react';

import { StyleSheet } from 'react-native';
import { FAB, Dialog, Button, TextInput, HelperText } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import { IAddressSearchFormProps } from './IAddressSearchFormProps';
import { UfList } from '../../../../data/UfList';
import { useTheme } from '@/themes/theme';
import { withPortal } from '@/helpers/paper';

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
    },
    dialogContent: {
        paddingBottom: 0,
    },
    textInput: {
        paddingHorizontal: 0,
        backgroundColor: 'transparent',
    },
    picker: {
        height: 46,
        marginTop: 20,
    },
});

const AddressSearchForm: React.FC<IAddressSearchFormProps> = ({
    index,
    addressState: {
        currentAddress,
    },
    onCheckByAddress,
}) => {

    const { customColors } = useTheme();

    const inputCidadeRef = React.useRef<any>(null);
    const inputUfRef = React.useRef<any>(null);

    const [fabVisible, setFabVisible] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const [uf, setUf] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [logradouro, setLogradouro] = React.useState('');

    const [ufError, setUfError] = React.useState(false);
    const [cidadeError, setCidadeError] = React.useState(false);
    const [logradouroError, setLogradouroError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => setFabVisible(true), 400);

        if (currentAddress !== null) {
            setUf(currentAddress.uf);
            setCidade(currentAddress.cidade);
            setLogradouro(currentAddress.logradouro);
        }
    }, []);

    const checkError = () => {
        const errUf = uf.length != 2;
        const errCidade = cidade.length < 3;
        const errLogradouro = logradouro.length < 3;

        setUfError(errUf);
        setCidadeError(errCidade);
        setLogradouroError(errLogradouro);

        return errUf || errCidade || errLogradouro;
    }

    const handleStartSearch = () => {
        if (checkError()) return;

        setOpen(false);
        onCheckByAddress({ uf, cidade, logradouro });
    };

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleCancel = () => {
        setOpen(false);
    };

    const handleChangeUf = (itemValue: any, itemPosition: number) => {
        setUf(String(itemValue));
    };

    const handleChangeCidade = (value: string) => {
        setCidade(value);
    };

    const handleChangeLogradouro = (value: string) => {
        setLogradouro(value);
    };

    return (
        <>
            <FAB
                icon="search-web"
                visible={fabVisible && index === 0}
                style={styles.fab}
                onPress={handleClickOpen}
            />

            <Dialog
                visible={open}
                onDismiss={handleCancel}
            >
                <Dialog.Title>Endereço para pesquisa</Dialog.Title>

                <Dialog.Content style={styles.dialogContent}>
                    <TextInput
                        label="Logradouro"
                        returnKeyType="next"
                        style={styles.textInput}
                        value={logradouro}
                        onChangeText={handleChangeLogradouro}
                        onFocus={() => setLogradouroError(false)}
                        onBlur={() => setLogradouroError(logradouro.length < 3)}
                        error={logradouroError}
                        blurOnSubmit={false}
                        onSubmitEditing={() => inputCidadeRef.current.focus()}
                    />

                    <HelperText
                        type="error"
                        visible={logradouroError}
                    >
                        Insira, no mínimo, 3 caracteres
                    </HelperText>

                    <TextInput
                        label="Cidade"
                        returnKeyType="next"
                        style={styles.textInput}
                        value={cidade}
                        onChangeText={handleChangeCidade}
                        onFocus={() => setCidadeError(false)}
                        onBlur={() => setCidadeError(cidade.length < 3)}
                        error={cidadeError}
                        ref={inputCidadeRef}
                        blurOnSubmit={false}
                        onSubmitEditing={() => inputUfRef.current.focus()}
                    />

                    <HelperText
                        type="error"
                        visible={cidadeError}
                    >
                        Insira, no mínimo, 3 caracteres
                    </HelperText>

                    <TextInput
                        label="Estado (UF)"
                        style={styles.textInput}
                        value={uf}
                        onFocus={() => setUfError(false)}
                        onBlur={() => setUfError(uf.length != 2)}
                        error={ufError}
                        ref={inputUfRef}
                        render={props => (
                            <Picker
                                selectedValue={uf}
                                onValueChange={handleChangeUf}
                                style={[styles.picker, { color: customColors.textSecondary } as any]}
                            >
                                <Picker.Item label="" value="" />

                                {UfList.map((uf, index) => (
                                    <Picker.Item
                                        label={`${uf[1]} (${uf[0]})`}
                                        value={uf[0]}
                                        key={index}
                                    />
                                ))}
                            </Picker>
                        )}
                    />

                    <HelperText
                        type="error"
                        visible={ufError}
                    >
                        Selecione um UF
                    </HelperText>
                </Dialog.Content>

                <Dialog.Actions>
                    <Button
                        onPress={handleCancel}
                        theme={{
                            colors: {
                                primary: customColors.button
                            }
                        }}
                    >
                        Cancelar
                    </Button>

                    <Button
                        onPress={handleStartSearch}
                        theme={{
                            colors: {
                                primary: customColors.button
                            }
                        }}
                    >
                        Pesquisar
                    </Button>
                </Dialog.Actions>
            </Dialog>
        </>
    );
};

export default withPortal(AddressSearchForm);

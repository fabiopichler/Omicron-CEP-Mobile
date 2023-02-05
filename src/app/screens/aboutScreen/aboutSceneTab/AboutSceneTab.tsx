import React from 'react';

import { View, StyleSheet, ScrollView, Linking } from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';

import Title from '../../../components/title/Title';

import { Config } from '@/config';
import { useTheme } from '@/themes/theme';

const { appVersion } = Config;

const styles = StyleSheet.create({
    root: {
        flexGrow: 1,
        paddingHorizontal: 14,
    },
    card: {
        marginHorizontal: 2,
    },
    marginBottom2: {
        marginBottom: 16,
    },
    paragraph: {
        lineHeight: 24,
        fontSize: 16,
    }
});

const AboutSceneTab: React.FC = () => {

    const { customColors, customStyles } = useTheme();

    const handleOpenURL = (url: string) => () => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }

    return (
        <ScrollView style={styles.root}>
            <View style={{ height: 16 }} />

            <Title
                title={`Omicron CEP v${appVersion}`}
                desc="&copy; 2019-2023 Fábio Pichler"
            />

            <Card style={[styles.card, styles.marginBottom2, customStyles.card]}>
                <Card.Title title="Omicron CEP" />

                <Card.Content>
                    <Paragraph style={styles.paragraph}>
                        Com o Omicron CEP, você pesquisa por qualquer CEP ou endereço, e tem o resultado imediatamente, dum jeito muito prático e rápido.
                    </Paragraph>
                </Card.Content>
            </Card>

            <Card style={[styles.card, styles.marginBottom2, customStyles.card]}>
                <Card.Content>
                    <Paragraph style={[styles.paragraph, styles.marginBottom2]}>
                        O Omicron CEP é um aplicativo especialmente desenvolvido para a consulta de CEPs de todo o Brasil.
                    </Paragraph>

                    <Paragraph style={styles.paragraph}>
                        O aplicativo é open source, totalmente gratuito e utiliza os serviços do webservice ViaCEP.
                    </Paragraph>
                </Card.Content>
            </Card>

            <Card style={[styles.card, styles.marginBottom2, customStyles.card]}>
                <Card.Title title="Informações" />

                <Card.Content>
                    <Paragraph style={styles.paragraph}>
                        Versão: {appVersion}
                        {'\n'}
                        Desenvolvido com: React Native
                        {'\n'}
                        Componentes UI: React Native Paper
                    </Paragraph>
                </Card.Content>

                <Card.Actions>
                    <Button
                        icon="home"
                        mode="text"
                        onPress={handleOpenURL('https://fabiopichler.net/omicron-cep')}
                        theme={{
                            colors: {
                                primary: customColors.button
                            }
                        }}
                    >
                        Site oficial
                    </Button>
                </Card.Actions>
            </Card>
        </ScrollView>
    );
};

export default AboutSceneTab;

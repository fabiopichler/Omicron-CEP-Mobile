import React from 'react';

import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
    root: {
        flexGrow: 1,
        paddingHorizontal: 14,
    },
    card: {
        marginHorizontal: 2,
        borderRadius: 0,
        elevation: 1,
    },
    marginBottom1: {
        marginBottom: 8,
    },
    marginBottom2: {
        marginBottom: 16,
    },
    paragraph: {
        lineHeight: 24,
        fontSize: 16,
    }
});

const LicenseSceneTab: React.FC = () => {

    return (
        <ScrollView style={styles.root}>
            <View style={{ height: 16 }} />

            <Card style={[styles.card, styles.marginBottom2]}>
                <Card.Content>
                    <Paragraph style={[styles.paragraph, styles.marginBottom2]}>
                        MIT License (MIT)
                    </Paragraph>

                    <Paragraph style={[styles.paragraph, styles.marginBottom2]}>
                        Copyright (c) 2019 Fábio Pichler
                    </Paragraph>

                    <Paragraph style={[styles.paragraph, styles.marginBottom2]}>
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                    </Paragraph>

                    <Paragraph style={[styles.paragraph, styles.marginBottom2]}>
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                    </Paragraph>

                    <Paragraph style={styles.paragraph}>
                        THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                    </Paragraph>
                </Card.Content>
            </Card>
        </ScrollView>
    );
};

export default LicenseSceneTab;

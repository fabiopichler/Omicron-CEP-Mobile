import React from 'react';

import { StyleSheet } from 'react-native';
import { Portal, Dialog, Button, Paragraph } from 'react-native-paper';

import { IQuestionDialogProps } from './IQuestionDialogProps';
import { useTheme } from '@/themes/theme';

const styles = StyleSheet.create({
    button: {
        minWidth: 60,
    },
    paragraph: {
        fontSize: 16,
    },
});

const QuestionDialog: React.FC<IQuestionDialogProps> = ({
    title,
    description,
    openButton: OpenButton,
    onCancel,
    onConfirm,
}) => {

    const [open, setOpen] = React.useState(false);

    const { customColors } = useTheme();

    const handleConfirm = (): void => {
        setOpen(false);

        if (onConfirm)
            onConfirm();
    }

    const handleClose = (): void => {
        setOpen(false);

        if (onCancel)
            onCancel();
    }

    return (
        <>
            <OpenButton
                onPress={() => setOpen(true)}
            />

            <Portal>
                <Dialog
                    visible={open}
                    onDismiss={handleClose}
                >
                    <Dialog.Title>{title}</Dialog.Title>

                    <Dialog.Content>
                        <Paragraph style={styles.paragraph}>
                            {description}
                        </Paragraph>
                    </Dialog.Content>

                    <Dialog.Actions>
                        <Button
                            onPress={handleClose}
                            style={styles.button}
                            theme={{
                                colors: {
                                    primary: customColors.textPrimary
                                }
                            }}
                        >
                            Cancelar
                        </Button>

                        <Button
                            onPress={handleConfirm}
                            style={styles.button}
                            theme={{
                                colors: {
                                    primary: customColors.textPrimary
                                }
                            }}
                        >
                            Ok
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </>
    );
};

export default QuestionDialog;

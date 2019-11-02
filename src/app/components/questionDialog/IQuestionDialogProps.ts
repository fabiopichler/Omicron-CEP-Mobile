
export interface IQuestionDialogProps {
    title: React.ReactNode;
    description: React.ReactNode;
    openButton: any;
    onCancel?: () => void;
    onConfirm?: () => void;
}

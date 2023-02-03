
export type AlertType = 'info' | 'warning' | 'error';

export interface IAlertProps {
    children?: React.ReactNode;
    type?: AlertType;
}

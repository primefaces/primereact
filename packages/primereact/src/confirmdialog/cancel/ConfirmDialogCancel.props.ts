import { ConfirmDialogCancelProps } from '@primereact/types/shared/confirmdialog';
import { ButtonProps } from 'primereact/button';

export const defaultCancelProps: ConfirmDialogCancelProps = {
    ...(ButtonProps.defaults as ConfirmDialogCancelProps),
    variant: 'text'
};

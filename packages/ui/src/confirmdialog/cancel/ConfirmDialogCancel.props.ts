import { ConfirmDialogCancelProps } from '@primereact/types/shared/confirmdialog';
import * as Button from 'primereact/button';

export const defaultCancelProps: ConfirmDialogCancelProps = {
    ...(Button.defaultProps as ConfirmDialogCancelProps),
    variant: 'text'
};

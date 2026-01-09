import { ConfirmDialogCancelProps } from '@primereact/types/shared/confirmdialog';
import { Button, ButtonProps } from 'primereact/button';

export const defaultCancelProps: ConfirmDialogCancelProps = {
    ...(ButtonProps.defaultProps as ConfirmDialogCancelProps),
    as: Button,
    variant: 'text'
};

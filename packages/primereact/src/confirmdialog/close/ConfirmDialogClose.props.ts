import type { ConfirmDialogCloseProps } from '@primereact/types/shared/confirmdialog';
import { ButtonProps } from 'primereact/button';
import { DialogClose } from 'primereact/dialog';

export const defaultCloseProps: ConfirmDialogCloseProps = {
    ...(ButtonProps.defaultProps as ConfirmDialogCloseProps),
    as: DialogClose,
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

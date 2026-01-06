import type { ConfirmDialogCloseProps } from '@primereact/types/shared/confirmdialog';
import { ButtonProps } from 'primereact/button';

export const defaultCloseProps: ConfirmDialogCloseProps = {
    ...(ButtonProps.defaultProps as ConfirmDialogCloseProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

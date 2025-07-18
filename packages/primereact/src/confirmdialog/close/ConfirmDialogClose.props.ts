import { ConfirmDialogCloseProps } from '@primereact/types/shared/confirmdialog';
import * as Button from 'primereact/button';

export const defaultCloseProps: ConfirmDialogCloseProps = {
    ...(Button.defaultProps as ConfirmDialogCloseProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

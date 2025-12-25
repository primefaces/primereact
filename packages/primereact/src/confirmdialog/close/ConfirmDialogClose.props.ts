import { ConfirmDialogCloseProps } from '@primereact/types/shared/confirmdialog';
import { ButtonProps } from 'primereact/button';

export const defaultCloseProps: ConfirmDialogCloseProps = {
    ...(ButtonProps.RootDefaults as ConfirmDialogCloseProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

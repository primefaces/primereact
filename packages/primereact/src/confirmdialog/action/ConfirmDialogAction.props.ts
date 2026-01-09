import { ConfirmDialogActionProps } from '@primereact/types/shared/confirmdialog';
import { Button, ButtonProps } from 'primereact/button';

export const defaultActionProps: ConfirmDialogActionProps = {
    ...(ButtonProps.defaultProps as ConfirmDialogActionProps),
    as: Button
};

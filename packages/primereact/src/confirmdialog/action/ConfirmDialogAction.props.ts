import { ConfirmDialogActionProps } from '@primereact/types/shared/confirmdialog';
import * as Button from 'primereact/button';

export const defaultActionProps: ConfirmDialogActionProps = {
    ...(Button.defaultProps as ConfirmDialogActionProps)
};

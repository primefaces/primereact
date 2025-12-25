import { ConfirmDialogActionProps } from '@primereact/types/shared/confirmdialog';
import { ButtonProps } from 'primereact/button';

export const defaultActionProps: ConfirmDialogActionProps = {
    ...(ButtonProps.RootDefaults as ConfirmDialogActionProps)
};

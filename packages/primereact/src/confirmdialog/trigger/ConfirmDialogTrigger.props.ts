import { ConfirmDialogTriggerProps } from '@primereact/types/shared/confirmdialog';
import { ButtonProps } from 'primereact/button';
import { DialogTrigger } from 'primereact/dialog';

export const defaultTriggerProps: ConfirmDialogTriggerProps = {
    ...(ButtonProps.defaultProps as ConfirmDialogTriggerProps),
    as: DialogTrigger
};

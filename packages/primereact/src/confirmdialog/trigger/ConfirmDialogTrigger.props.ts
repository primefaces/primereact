import { ConfirmDialogTriggerProps } from '@primereact/types/shared/confirmdialog';
import { DialogProps, DialogTrigger } from 'primereact/dialog';

export const defaultTriggerProps: ConfirmDialogTriggerProps = {
    ...(DialogProps.defaultTriggerProps as ConfirmDialogTriggerProps),
    as: DialogTrigger
};

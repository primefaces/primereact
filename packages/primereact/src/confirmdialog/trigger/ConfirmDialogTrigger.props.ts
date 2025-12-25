import { ConfirmDialogTriggerProps } from '@primereact/types/shared/confirmdialog';
import { ButtonProps } from 'primereact/button';

export const defaultTriggerProps: ConfirmDialogTriggerProps = {
    ...(ButtonProps.RootDefaults as ConfirmDialogTriggerProps)
};

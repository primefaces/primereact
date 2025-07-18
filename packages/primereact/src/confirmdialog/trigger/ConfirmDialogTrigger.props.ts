import { ConfirmDialogTriggerProps } from '@primereact/types/shared/confirmdialog';
import * as Button from 'primereact/button';

export const defaultTriggerProps: ConfirmDialogTriggerProps = {
    ...(Button.defaultProps as ConfirmDialogTriggerProps)
};

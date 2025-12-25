import { ConfirmPopupTriggerProps } from '@primereact/types/shared/confirmpopup';
import * as Button from 'primereact/button';

export const defaultTriggerProps: ConfirmPopupTriggerProps = {
    ...(Button.defaultProps as ConfirmPopupTriggerProps)
};

import { ConfirmPopupTriggerProps } from '@primereact/types/shared/confirmpopup';
import { ButtonProps } from 'primereact/button';

export const defaultTriggerProps: ConfirmPopupTriggerProps = {
    ...(ButtonProps.RootDefaults as ConfirmPopupTriggerProps)
};

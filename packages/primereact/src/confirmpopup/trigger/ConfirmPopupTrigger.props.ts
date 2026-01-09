import { ConfirmPopupTriggerProps } from '@primereact/types/shared/confirmpopup';
import { Button, ButtonProps } from 'primereact/button';

export const defaultTriggerProps: ConfirmPopupTriggerProps = {
    ...(ButtonProps.defaultProps as ConfirmPopupTriggerProps),
    as: Button
};

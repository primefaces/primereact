import { ConfirmPopupRejectProps } from '@primereact/types/shared/confirmpopup';
import { ButtonProps } from 'primereact/button';

export const defaultRejectProps: ConfirmPopupRejectProps = {
    ...(ButtonProps.defaults as ConfirmPopupRejectProps),
    size: 'small',
    variant: 'text'
};

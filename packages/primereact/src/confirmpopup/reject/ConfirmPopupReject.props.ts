import { ConfirmPopupRejectProps } from '@primereact/types/shared/confirmpopup';
import { ButtonProps } from 'primereact/button';

export const defaultRejectProps: ConfirmPopupRejectProps = {
    ...(ButtonProps.RootDefaults as ConfirmPopupRejectProps),
    size: 'small',
    variant: 'text'
};

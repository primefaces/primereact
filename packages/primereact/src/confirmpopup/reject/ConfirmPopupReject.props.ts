import { ConfirmPopupRejectProps } from '@primereact/types/shared/confirmpopup';
import { Button, ButtonProps } from 'primereact/button';

export const defaultRejectProps: ConfirmPopupRejectProps = {
    ...(ButtonProps.defaultProps as ConfirmPopupRejectProps),
    as: Button,
    size: 'small',
    variant: 'text'
};

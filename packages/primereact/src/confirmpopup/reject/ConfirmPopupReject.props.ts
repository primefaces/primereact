import { ConfirmPopupRejectProps } from '@primereact/types/shared/confirmpopup';
import * as Button from 'primereact/button';

export const defaultRejectProps: ConfirmPopupRejectProps = {
    ...(Button.defaultProps as ConfirmPopupRejectProps),
    size: 'small',
    variant: 'text'
};

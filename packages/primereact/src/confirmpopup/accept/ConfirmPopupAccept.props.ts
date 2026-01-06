import { ConfirmPopupAcceptProps } from '@primereact/types/shared/confirmpopup';
import { ButtonProps } from 'primereact/button';

export const defaultAcceptProps: ConfirmPopupAcceptProps = {
    ...(ButtonProps.defaults as ConfirmPopupAcceptProps),
    size: 'small'
};

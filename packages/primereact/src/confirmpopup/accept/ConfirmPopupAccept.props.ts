import { ConfirmPopupAcceptProps } from '@primereact/types/shared/confirmpopup';
import { ButtonProps } from 'primereact/button';

export const defaultAcceptProps: ConfirmPopupAcceptProps = {
    ...(ButtonProps.defaultProps as ConfirmPopupAcceptProps),
    size: 'small'
};

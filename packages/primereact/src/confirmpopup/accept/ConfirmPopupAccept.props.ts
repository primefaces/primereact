import { ConfirmPopupAcceptProps } from '@primereact/types/shared/confirmpopup';
import { Button, ButtonProps } from 'primereact/button';

export const defaultAcceptProps: ConfirmPopupAcceptProps = {
    ...(ButtonProps.defaultProps as ConfirmPopupAcceptProps),
    as: Button,
    size: 'small'
};

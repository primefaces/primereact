import { ConfirmPopupAcceptProps } from '@primereact/types/shared/confirmpopup';
import * as Button from 'primereact/button';

export const defaultAcceptProps: ConfirmPopupAcceptProps = {
    ...(Button.defaultProps as ConfirmPopupAcceptProps),
    size: 'small'
};

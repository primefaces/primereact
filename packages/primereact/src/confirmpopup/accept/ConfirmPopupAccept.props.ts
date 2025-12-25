import { ConfirmPopupAcceptProps } from '@primereact/types/shared/confirmpopup';
import { ButtonProps } from 'primereact/button';

export const defaultAcceptProps: ConfirmPopupAcceptProps = {
    ...(ButtonProps.RootDefaults as ConfirmPopupAcceptProps),
    size: 'small'
};

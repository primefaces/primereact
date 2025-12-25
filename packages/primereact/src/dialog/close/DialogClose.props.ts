import { DialogCloseProps } from '@primereact/types/shared/dialog';
import { ButtonProps } from 'primereact/button';

export const defaultCloseProps: DialogCloseProps = {
    ...(ButtonProps.RootDefaults as DialogCloseProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

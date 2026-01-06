import { DrawerCloseProps } from '@primereact/types/shared/drawer';
import { ButtonProps } from 'primereact/button';

export const defaultCloseProps: DrawerCloseProps = {
    ...(ButtonProps.defaults as DrawerCloseProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

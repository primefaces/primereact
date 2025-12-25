import { DrawerCloseProps } from '@primereact/types/shared/drawer';
import { ButtonProps } from 'primereact/button';

export const defaultCloseProps: DrawerCloseProps = {
    ...(ButtonProps.RootDefaults as DrawerCloseProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

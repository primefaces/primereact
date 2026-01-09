import { DrawerCloseProps } from '@primereact/types/shared/drawer';
import { Button, ButtonProps } from 'primereact/button';

export const defaultCloseProps: DrawerCloseProps = {
    ...(ButtonProps.defaultProps as DrawerCloseProps),
    as: Button,
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};

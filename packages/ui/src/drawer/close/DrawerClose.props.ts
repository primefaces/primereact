import { DrawerCloseProps } from '@primereact/types/shared/drawer';
import * as Button from 'primereact/button';

export const defaultCloseProps: DrawerCloseProps = {
    ...(Button.defaultProps as DrawerCloseProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};
